import {
  MultiAppendResult,
  AppendResponse,
  AppendStreamRequest,
} from "../../types";
import type { Client } from "../../Client";
import grpc from "../../../generated/kurrentdb/protocols/v2/streams/streams_grpc_pb";
import protobuf, {
  SchemaInfo,
} from "../../../generated/kurrentdb/protocols/v2/streams/streams_pb";
import {
  backpressuredWrite,
  convertToCommandError,
  convertToSchemaDataFormat as convertToSchemaFormat,
  mapToValueMap,
} from "../../utils";

export const multiStreamAppend = async function (
  this: Client,
  requests: AppendStreamRequest[]
): Promise<MultiAppendResult> {
  if (
    requests.some((request) =>
      request.events.some(
        (event) => event.metadata && event.metadata.constructor === Uint8Array
      )
    )
  )
    throw new Error(
      "multiStreamAppend requires all event metadata to be in JSON format."
    );

  return this.execute(
    grpc.StreamsServiceClient,
    "multiStreamAppend",
    (client) =>
      new Promise<MultiAppendResult>(async (resolve, reject) => {
        const sink = client.appendSession(
          ...this.callArguments({
            requiresLeader: false,
          }),
          (error, response) => {
            if (error != null) {
              return reject(convertToCommandError(error));
            }

            const successes: AppendResponse[] = [];
            for (const success of response.getOutputList()) {
              successes.push({
                streamName: success.getStream(),
                revision: BigInt(success.getStreamRevision()),
              });
            }

            return resolve({
              position: BigInt(response.getPosition()),
              responses: successes,
            });
          }
        );

        sink.on("error", (err) => reject(err));

        for (const request of requests) {
          const message = new protobuf.AppendRequest();
          message.setStream(request.streamName);

          switch (request.expectedState) {
            case "any": {
              message.setExpectedRevision((-2).toString(10));
              break;
            }
            case "no_stream": {
              message.setExpectedRevision((-1).toString(10));
              break;
            }
            case "stream_exists": {
              message.setExpectedRevision((-4).toString(10));
              break;
            }
            default: {
              message.setExpectedRevision(request.expectedState.toString(10));
              break;
            }
          }

          for (const event of request.events) {
            const record = new protobuf.AppendRecord();
            record.setRecordId(event.id);

            const schemaInfo = new SchemaInfo();
            schemaInfo.setFormat(convertToSchemaFormat(event.contentType));
            schemaInfo.setName(event.type);
            record.setSchema(schemaInfo);

            if (event.metadata) {
              const metadataMap = mapToValueMap(
                event.metadata as Record<string, unknown>
              );
              for (const [key, value] of metadataMap) {
                record.getPropertiesMap().set(key, value);
              }
            }

            switch (event.contentType) {
              case "application/json": {
                const data = JSON.stringify(event.data);
                record.setData(Buffer.from(data, "utf8").toString("base64"));
                break;
              }

              case "application/octet-stream": {
                record.setData(event.data);
                break;
              }
            }

            message.addRecords(record);
          }

          await backpressuredWrite(sink, message);
        }

        sink.end();
      })
  );
};
