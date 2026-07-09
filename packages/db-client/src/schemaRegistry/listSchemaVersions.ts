import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { ListSchemaVersionsRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type { ListSchemaVersionsOptions, SchemaVersion } from "./types";
import { mapGrpcSchemaVersion } from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Lists all versions of a schema.
     * @param schemaName - The name of the schema.
     * @param options - Options including whether to include schema definitions.
     * @returns An array of schema versions.
     */
    listSchemaVersions(
      schemaName: string,
      options?: ListSchemaVersionsOptions
    ): Promise<SchemaVersion[]>;
  }
}

Client.prototype.listSchemaVersions = async function (
  this: Client,
  schemaName: string,
  options: ListSchemaVersionsOptions = {}
): Promise<SchemaVersion[]> {
  const { includeDefinition = false, ...baseOptions } = options;

  const req = new ListSchemaVersionsRequest();
  req.setSchemaName(schemaName);
  req.setIncludeDefinition(includeDefinition);

  debug.command("listSchemaVersions: %O", {
    schemaName,
    includeDefinition,
    options: baseOptions,
  });
  debug.command_grpc("listSchemaVersions: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "listSchemaVersions",
    (client) =>
      new Promise<SchemaVersion[]>((resolve, reject) => {
        client.listSchemaVersions(
          req,
          ...this.callArguments(baseOptions),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));

            const versions = response?.getVersionsList() ?? [];
            return resolve(versions.map(mapGrpcSchemaVersion));
          }
        );
      })
  );
};
