import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { GetSchemaRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type { GetSchemaOptions, Schema } from "./types";
import { mapGrpcSchema } from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Retrieves schema metadata by name.
     * @param schemaName - The name of the schema to retrieve.
     * @param options - Command options.
     * @returns The schema metadata.
     */
    getSchema(schemaName: string, options?: GetSchemaOptions): Promise<Schema>;
  }
}

Client.prototype.getSchema = async function (
  this: Client,
  schemaName: string,
  options: GetSchemaOptions = {}
): Promise<Schema> {
  const req = new GetSchemaRequest();
  req.setSchemaName(schemaName);

  debug.command("getSchema: %O", {
    schemaName,
    options,
  });
  debug.command_grpc("getSchema: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "getSchema",
    (client) =>
      new Promise<Schema>((resolve, reject) => {
        client.getSchema(
          req,
          ...this.callArguments(options),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));

            const grpcSchema = response?.getSchema();
            if (!grpcSchema) {
              return reject(new Error("Schema not found in response"));
            }

            return resolve(mapGrpcSchema(grpcSchema));
          }
        );
      })
  );
};
