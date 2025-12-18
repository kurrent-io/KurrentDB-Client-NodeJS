import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { GetSchemaVersionRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type { GetSchemaVersionOptions, SchemaVersion } from "./types";
import { mapGrpcSchemaVersion } from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Retrieves a schema version by schema name and optional version number.
     * @param schemaName - The name of the schema.
     * @param options - Options including specific version number. If not provided, returns the latest version.
     * @returns The schema version details.
     */
    getSchemaVersion(
      schemaName: string,
      options?: GetSchemaVersionOptions
    ): Promise<SchemaVersion>;
  }
}

Client.prototype.getSchemaVersion = async function (
  this: Client,
  schemaName: string,
  options: GetSchemaVersionOptions = {}
): Promise<SchemaVersion> {
  const { versionNumber, ...baseOptions } = options;

  const req = new GetSchemaVersionRequest();
  req.setSchemaName(schemaName);

  if (versionNumber !== undefined) {
    req.setVersionNumber(versionNumber);
  }

  debug.command("getSchemaVersion: %O", {
    schemaName,
    versionNumber,
    options: baseOptions,
  });
  debug.command_grpc("getSchemaVersion: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "getSchemaVersion",
    (client) =>
      new Promise<SchemaVersion>((resolve, reject) => {
        client.getSchemaVersion(
          req,
          ...this.callArguments(baseOptions),
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
