import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { DeleteSchemaVersionsRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type {
  DeleteSchemaVersionsOptions,
  DeleteSchemaVersionsResult,
} from "./types";
import { mapGrpcSchemaVersionError } from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Deletes specific versions of a schema.
     * @param schemaName - The name of the schema.
     * @param versions - The version numbers to delete.
     * @param options - Command options.
     * @returns Any errors that occurred during deletion.
     */
    deleteSchemaVersions(
      schemaName: string,
      versions: number[],
      options?: DeleteSchemaVersionsOptions
    ): Promise<DeleteSchemaVersionsResult>;
  }
}

Client.prototype.deleteSchemaVersions = async function (
  this: Client,
  schemaName: string,
  versions: number[],
  options: DeleteSchemaVersionsOptions = {}
): Promise<DeleteSchemaVersionsResult> {
  const req = new DeleteSchemaVersionsRequest();
  req.setSchemaName(schemaName);
  req.setVersionsList(versions);

  debug.command("deleteSchemaVersions: %O", {
    schemaName,
    versions,
    options,
  });
  debug.command_grpc("deleteSchemaVersions: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "deleteSchemaVersions",
    (client) =>
      new Promise<DeleteSchemaVersionsResult>((resolve, reject) => {
        client.deleteSchemaVersions(
          req,
          ...this.callArguments(options),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));

            const errors = response?.getErrorsList() ?? [];
            return resolve({
              errors: errors.map(mapGrpcSchemaVersionError),
            });
          }
        );
      })
  );
};
