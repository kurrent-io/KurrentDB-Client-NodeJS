import {
  AppendStreamRequest,
  MultiAppendResult,
  AppendStreamSuccess,
  AppendStreamFailure,
  UnknownErrorDetails,
  BaseOptions,
} from "../../types";
import type { Client } from "../../Client";
import grpc from "../../../generated/kurrentdb/protocols/v2/streams/streams_grpc_pb";
import protobuf from "../../../generated/kurrentdb/protocols/v2/streams/streams_pb";
import dynamic from "../../../generated/kurrentdb/protocols/v2/core_pb";
import {
  backpressuredWrite,
  convertToCommandError,
  convertToSchemaDataFormat,
} from "../../utils";

export const multiAppend = async function (
  this: Client,
  requests: AppendStreamRequest[],
  baseOptions: BaseOptions
): Promise<MultiAppendResult> {
  return this.execute(
    grpc.StreamsServiceClient,
    "multiStreamAppend",
    (client) =>
      new Promise<MultiAppendResult>(async (resolve, reject) => {
        baseOptions.requiresLeader = false;
        const sink = client.multiStreamAppendSession(
          ...this.callArguments(baseOptions),
          (error, response) => {
            if (error != null) {
              return reject(convertToCommandError(error));
            }

            if (response.getSuccess() != undefined) {
              const successes: AppendStreamSuccess[] = [];
              for (const success of response.getSuccess()!.getOutputList()) {
                successes.push({
                  streamName: success.getStream(),
                  revision: BigInt(success.getStreamRevision()),
                  position: BigInt(success.getPosition()),
                });
              }

              return resolve({ success: true, output: successes });
            }
            const failures: AppendStreamFailure[] = [];

            for (const failure of response.getFailure()!.getOutputList()) {
              const value: AppendStreamFailure = {
                streamName: failure.getStream(),
                details: UnknownErrorDetails,
              };

              switch (failure.getErrorCase()) {
                case protobuf.AppendStreamFailure.ErrorCase.ACCESS_DENIED:
                  value.details = {
                    type: "access_denied",
                    reason: failure.getAccessDenied()?.toString() ?? "",
                  };

                  break;

                case protobuf.AppendStreamFailure.ErrorCase.STREAM_DELETED:
                  value.details = {
                    type: "stream_deleted",
                  };

                  break;

                case protobuf.AppendStreamFailure.ErrorCase
                  .STREAM_REVISION_CONFLICT:
                  value.details = {
                    type: "wrong_expected_revision",
                    revision: BigInt(
                      failure.getStreamRevisionConflict()!.getStreamRevision()
                    ),
                  };
                  break;

                case protobuf.AppendStreamFailure.ErrorCase
                  .TRANSACTION_MAX_SIZE_EXCEEDED:
                  value.details = {
                    type: "transaction_max_size_exceeded",
                    maxSize: failure
                      .getTransactionMaxSizeExceeded()!
                      .getMaxSize(),
                  };
                  break;
              }

              failures.push(value);
            }

            return resolve({ success: false, output: failures });
          }
        );

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

            dataFormat.setStringValue(
              convertToSchemaDataFormat(event.contentType)
            );
            schemaName.setStringValue(event.type);
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

        sink.end();
      })
  );
};
