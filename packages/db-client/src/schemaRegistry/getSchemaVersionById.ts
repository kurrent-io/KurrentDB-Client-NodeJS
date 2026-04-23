import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { GetSchemaVersionByIdRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type { GetSchemaVersionByIdOptions, SchemaVersion } from "./types";
import { mapGrpcSchemaVersion } from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Retrieves a schema version by its unique version ID.
     * @param schemaVersionId - The unique identifier of the schema version.
     * @param options - Command options.
     * @returns The schema version details.
     */
    getSchemaVersionById(
      schemaVersionId: string,
      options?: GetSchemaVersionByIdOptions
    ): Promise<SchemaVersion>;
  }
}

Client.prototype.getSchemaVersionById = async function (
  this: Client,
  schemaVersionId: string,
  options: GetSchemaVersionByIdOptions = {}
): Promise<SchemaVersion> {
  const req = new GetSchemaVersionByIdRequest();
  req.setSchemaVersionId(schemaVersionId);

  debug.command("getSchemaVersionById: %O", {
    schemaVersionId,
    options,
  });
  debug.command_grpc("getSchemaVersionById: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "getSchemaVersionById",
    (client) =>
      new Promise<SchemaVersion>((resolve, reject) => {
        client.getSchemaVersionById(
          req,
          ...this.callArguments(options),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));

            const version = response?.getVersion();
            if (!version) {
              return reject(new Error("Schema version not found in response"));
            }

            return resolve(mapGrpcSchemaVersion(version));
          }
        );
      })
  );
};
