import {AppendStreamRequest, MultiAppendResult} from "../../types";
import grpc from "../../../generated/streams.v2_grpc_pb";
import type {Client} from "../../Client";

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

        }
      }));
}