import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { ListSchemasRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type { ListSchemasOptions, Schema } from "./types";
import { mapGrpcSchema } from "./utils/mappers";

declare module "../Client" {
  interface Client {
    /**
     * Lists schemas with optional filtering.
     * @param options - Filter and command options.
     * @returns An array of schemas matching the filters.
     */
    listSchemas(options?: ListSchemasOptions): Promise<Schema[]>;
  }
}

Client.prototype.listSchemas = async function (
  this: Client,
  options: ListSchemasOptions = {}
): Promise<Schema[]> {
  const { schemaNamePrefix, schemaTags, ...baseOptions } = options;

  const req = new ListSchemasRequest();

  if (schemaNamePrefix !== undefined) {
    req.setSchemaNamePrefix(schemaNamePrefix);
  }

  if (schemaTags !== undefined) {
    const tagsMap = req.getSchemaTagsMap();
    for (const [key, value] of Object.entries(schemaTags)) {
      tagsMap.set(key, value);
    }
  }

  debug.command("listSchemas: %O", {
    schemaNamePrefix,
    schemaTags,
    options: baseOptions,
  });
  debug.command_grpc("listSchemas: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "listSchemas",
    (client) =>
      new Promise<Schema[]>((resolve, reject) => {
        client.listSchemas(
          req,
          ...this.callArguments(baseOptions),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));

            const schemas = response?.getSchemasList() ?? [];
            return resolve(schemas.map(mapGrpcSchema));
          }
        );
      })
  );
};
