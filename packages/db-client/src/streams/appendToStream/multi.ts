import {AppendStreamRequest, MultiAppendResult} from "../../types";
import grpc from "../../../generated/streams.v2_grpc_pb";
import type {Client} from "../../Client";
import protobuf from "../../../generated/streams.v2_pb";
import dynamic from "../../../generated/dynamic-value_pb";
import { backpressuredWrite, InternalOptions } from "../../utils";
import type { AppendToStreamOptions } from ".";

export const multiAppend = async function (
  this: Client,
  requests: AppendStreamRequest[],
  {...baseOptions}: InternalOptions<AppendToStreamOptions>
): Promise<MultiAppendResult> {

  return this.execute(
    grpc.StreamsServiceClient,
    "multiStreamAppend",
    (client) =>
      new Promise<MultiAppendResult>(async (resolve, reject) => {
        const sink = client.multiStreamAppendSession(...this.callArguments(baseOptions),
          (error, response) => {});

        sink.on("error", (err) => reject(err));

        for (const request of requests) {
          const message = new protobuf.AppendStreamRequest();
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
            const dataFormat = new dynamic.DynamicValue();
            const schemaName = new dynamic.DynamicValue();
            record.setRecordId(event.id);

            dataFormat.setBytesValue(event.contentType);
            schemaName.setBytesValue(event.type);
            record.getPropertiesMap().set("$schema.data-format", dataFormat);
            record.getPropertiesMap().set("$schema.name", schemaName);

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
      }));
}