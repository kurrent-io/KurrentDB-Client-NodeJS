import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { CreateSchemaRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type {
  CreateSchemaOptions,
  CreateSchemaResult,
  SchemaDetails,
} from "./types";
import {
  createGrpcSchemaDetails,
  toSchemaDefinitionBytes,
} from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Creates a new schema in the schema registry.
     * @param schemaName - The name of the schema to create.
     * @param details - The schema details including data format and compatibility mode.
     * @param options - Optional settings including initial schema definition.
     * @returns The result containing schema version ID and version number if a definition was provided.
     */
    createSchema(
      schemaName: string,
      details: SchemaDetails,
      options?: CreateSchemaOptions
    ): Promise<CreateSchemaResult>;
  }
}

Client.prototype.createSchema = async function (
  this: Client,
  schemaName: string,
  details: SchemaDetails,
  options: CreateSchemaOptions = {}
): Promise<CreateSchemaResult> {
  const { schemaDefinition, ...baseOptions } = options;

  const req = new CreateSchemaRequest();
  req.setSchemaName(schemaName);
  req.setDetails(createGrpcSchemaDetails(details));

  if (schemaDefinition !== undefined) {
    req.setSchemaDefinition(toSchemaDefinitionBytes(schemaDefinition));
  }

  debug.command("createSchema: %O", {
    schemaName,
    details,
    hasDefinition: schemaDefinition !== undefined,
    options: baseOptions,
  });
  debug.command_grpc("createSchema: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "createSchema",
    (client) =>
      new Promise<CreateSchemaResult>((resolve, reject) => {
        client.createSchema(
          req,
          ...this.callArguments(baseOptions),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));

            const result: CreateSchemaResult = {};
            if (schemaDefinition !== undefined && response) {
              result.schemaVersionId = response.getSchemaVersionId();
              result.versionNumber = response.getVersionNumber();
            }
            return resolve(result);
          }
        );
      })
  );
};
