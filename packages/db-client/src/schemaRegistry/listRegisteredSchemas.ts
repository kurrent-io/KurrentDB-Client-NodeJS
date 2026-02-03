import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { ListRegisteredSchemasRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type { ListRegisteredSchemasOptions, RegisteredSchema } from "./types";
import { mapGrpcRegisteredSchema } from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Lists schemas with their latest version information.
     * @param options - Filter and command options.
     * @returns An array of registered schemas with their latest versions.
     */
    listRegisteredSchemas(
      options?: ListRegisteredSchemasOptions
    ): Promise<RegisteredSchema[]>;
  }
}

Client.prototype.listRegisteredSchemas = async function (
  this: Client,
  options: ListRegisteredSchemasOptions = {}
): Promise<RegisteredSchema[]> {
  const {
    schemaVersionId,
    schemaNamePrefix,
    schemaTags,
    includeDefinition = false,
    ...baseOptions
  } = options;

  const req = new ListRegisteredSchemasRequest();

  if (schemaVersionId !== undefined) {
    req.setSchemaVersionId(schemaVersionId);
  }

  if (schemaNamePrefix !== undefined) {
    req.setSchemaNamePrefix(schemaNamePrefix);
  }

  if (schemaTags !== undefined) {
    const tagsMap = req.getSchemaTagsMap();
    for (const [key, value] of Object.entries(schemaTags)) {
      tagsMap.set(key, value);
    }
  }

  req.setIncludeDefinition(includeDefinition);

  debug.command("listRegisteredSchemas: %O", {
    schemaVersionId,
    schemaNamePrefix,
    schemaTags,
    includeDefinition,
    options: baseOptions,
  });
  debug.command_grpc("listRegisteredSchemas: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "listRegisteredSchemas",
    (client) =>
      new Promise<RegisteredSchema[]>((resolve, reject) => {
        client.listRegisteredSchemas(
          req,
          ...this.callArguments(baseOptions),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));

            const schemas = response?.getSchemasList() ?? [];
            return resolve(schemas.map(mapGrpcRegisteredSchema));
          }
        );
      })
  );
};
