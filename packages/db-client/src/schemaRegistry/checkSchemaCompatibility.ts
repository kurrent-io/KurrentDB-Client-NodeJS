import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { CheckSchemaCompatibilityRequest } from "../../generated/kurrentdb/protocols/v2/registry/validation_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type {
  CheckSchemaCompatibilityOptions,
  CheckSchemaCompatibilityResult,
} from "./types";
import {
  mapSchemaDataFormatToGrpc,
  mapGrpcSchemaCompatibilityError,
  toSchemaDefinitionBytes,
} from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Checks if a schema definition is compatible with an existing schema.
     * @param schemaDefinition - The schema definition to check.
     * @param options - Options specifying the schema or version to check against, and the data format.
     * @returns The compatibility result including any errors.
     */
    checkSchemaCompatibility(
      schemaDefinition: string | Uint8Array,
      options: CheckSchemaCompatibilityOptions
    ): Promise<CheckSchemaCompatibilityResult>;
  }
}

Client.prototype.checkSchemaCompatibility = async function (
  this: Client,
  schemaDefinition: string | Uint8Array,
  options: CheckSchemaCompatibilityOptions
): Promise<CheckSchemaCompatibilityResult> {
  const { schemaName, schemaVersionId, dataFormat, ...baseOptions } = options;

  if (!schemaName && !schemaVersionId) {
    throw new Error(
      "Either schemaName or schemaVersionId must be provided in options"
    );
  }

  const req = new CheckSchemaCompatibilityRequest();
  req.setDefinition(toSchemaDefinitionBytes(schemaDefinition));
  req.setDataFormat(mapSchemaDataFormatToGrpc(dataFormat));

  if (schemaName !== undefined) {
    req.setSchemaName(schemaName);
  } else if (schemaVersionId !== undefined) {
    req.setSchemaVersionId(schemaVersionId);
  }

  debug.command("checkSchemaCompatibility: %O", {
    schemaName,
    schemaVersionId,
    dataFormat,
    definitionLength:
      typeof schemaDefinition === "string"
        ? schemaDefinition.length
        : schemaDefinition.byteLength,
    options: baseOptions,
  });
  debug.command_grpc("checkSchemaCompatibility: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "checkSchemaCompatibility",
    (client) =>
      new Promise<CheckSchemaCompatibilityResult>((resolve, reject) => {
        client.checkSchemaCompatibility(
          req,
          ...this.callArguments(baseOptions),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));

            const success = response?.getSuccess();
            if (success) {
              return resolve({
                isCompatible: true,
                schemaVersionId: success.getSchemaVersionId(),
              });
            }

            const failure = response?.getFailure();
            if (failure) {
              return resolve({
                isCompatible: false,
                errors: failure
                  .getErrorsList()
                  .map(mapGrpcSchemaCompatibilityError),
              });
            }

            // Default to incompatible with no errors if response is empty
            return resolve({
              isCompatible: false,
              errors: [],
            });
          }
        );
      })
  );
};
