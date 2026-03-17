import type {
  AppendRecordInput,
  AppendRecordsResult,
  AppendResponse,
  ConsistencyCheck,
} from "../../types";
import type { Client } from "../../Client";
import grpc from "../../../generated/kurrentdb/protocols/v2/streams/streams_grpc_pb";
import protobuf, {
  SchemaInfo,
} from "../../../generated/kurrentdb/protocols/v2/streams/streams_pb";
import {
  convertToCommandError,
  convertToSchemaDataFormat as convertToSchemaFormat,
  mapToValueMap,
} from "../../utils";

export const appendRecords = async function (
  this: Client,
  records: AppendRecordInput[],
  checks?: ConsistencyCheck[]
): Promise<AppendRecordsResult> {
  for (const record of records) {
    const { metadata } = record.record;
    if (metadata == null) continue;
    if (
      metadata.constructor === Uint8Array ||
      typeof metadata !== "object" ||
      Array.isArray(metadata) ||
      Object.values(metadata).some((value) => typeof value !== "string")
    ) {
      throw new Error(
        "appendRecords requires metadata to be a plain object with string keys and string values."
      );
    }
  }

  return this.execute(
    grpc.StreamsServiceClient,
    "appendRecords",
    (client) =>
      new Promise<AppendRecordsResult>((resolve, reject) => {
        const request = new protobuf.AppendRecordsRequest();

        for (const record of records) {
          const appendRecord = new protobuf.AppendRecord();
          appendRecord.setStream(record.streamName);
          appendRecord.setRecordId(record.record.id);

          const schemaInfo = new SchemaInfo();
          schemaInfo.setFormat(
            convertToSchemaFormat(record.record.contentType)
          );
          schemaInfo.setName(record.record.type);
          appendRecord.setSchema(schemaInfo);

          if (record.record.metadata) {
            const metadataMap = mapToValueMap(
              record.record.metadata as Record<string, string>
            );
            for (const [key, value] of metadataMap) {
              appendRecord.getPropertiesMap().set(key, value);
            }
          }

          switch (record.record.contentType) {
            case "application/json": {
              const data = JSON.stringify(record.record.data);
              appendRecord.setData(
                Buffer.from(data, "utf8").toString("base64")
              );
              break;
            }

            case "application/octet-stream": {
              appendRecord.setData(record.record.data);
              break;
            }
          }

          request.addRecords(appendRecord);
        }

        if (checks) {
          for (const check of checks) {
            const consistencyCheck = new protobuf.ConsistencyCheck();
            const streamStateCheck =
              new protobuf.ConsistencyCheck.StreamStateCheck();
            streamStateCheck.setStream(check.streamName);

            switch (check.expectedState) {
              case "any": {
                streamStateCheck.setExpectedState((-2).toString(10));
                break;
              }
              case "no_stream": {
                streamStateCheck.setExpectedState((-1).toString(10));
                break;
              }
              case "stream_exists": {
                streamStateCheck.setExpectedState((-4).toString(10));
                break;
              }
              default: {
                streamStateCheck.setExpectedState(
                  check.expectedState.toString(10)
                );
                break;
              }
            }

            consistencyCheck.setStreamState(streamStateCheck);
            request.addChecks(consistencyCheck);
          }
        }

        client.appendRecords(
          request,
          ...this.callArguments({
            requiresLeader: false,
          }),
          (error, response) => {
            if (error != null) {
              return reject(convertToCommandError(error));
            }

            const successes: AppendResponse[] = [];
            for (const revision of response.getRevisionsList()) {
              successes.push({
                streamName: revision.getStream(),
                revision: BigInt(revision.getRevision()),
              });
            }

            return resolve({
              position: BigInt(response.getPosition()),
              responses: successes,
            });
          }
        );
      })
  );
};
