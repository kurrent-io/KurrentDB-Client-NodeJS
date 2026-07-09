import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { RegisterSchemaVersionRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type {
  RegisterSchemaVersionOptions,
  RegisterSchemaVersionResult,
} from "./types";
import { toSchemaDefinitionBytes } from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Registers a new version for an existing schema.
     * @param schemaName - The name of the schema to add a version to.
     * @param schemaDefinition - The schema definition for the new version.
     * @param options - Command options.
     * @returns The registered schema version ID and version number.
     */
    registerSchemaVersion(
      schemaName: string,
      schemaDefinition: string | Uint8Array,
      options?: RegisterSchemaVersionOptions
    ): Promise<RegisterSchemaVersionResult>;
  }
}

Client.prototype.registerSchemaVersion = async function (
  this: Client,
  schemaName: string,
  schemaDefinition: string | Uint8Array,
  options: RegisterSchemaVersionOptions = {}
): Promise<RegisterSchemaVersionResult> {
  const req = new RegisterSchemaVersionRequest();
  req.setSchemaName(schemaName);
  req.setSchemaDefinition(toSchemaDefinitionBytes(schemaDefinition));

  debug.command("registerSchemaVersion: %O", {
    schemaName,
    definitionLength:
      typeof schemaDefinition === "string"
        ? schemaDefinition.length
        : schemaDefinition.byteLength,
    options,
  });
  debug.command_grpc("registerSchemaVersion: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "registerSchemaVersion",
    (client) =>
      new Promise<RegisterSchemaVersionResult>((resolve, reject) => {
        client.registerSchemaVersion(
          req,
          ...this.callArguments(options),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));

            return resolve({
              schemaVersionId: response?.getSchemaVersionId() ?? "",
              versionNumber: response?.getVersionNumber() ?? 0,
            });
          }
        );
      })
  );
};
