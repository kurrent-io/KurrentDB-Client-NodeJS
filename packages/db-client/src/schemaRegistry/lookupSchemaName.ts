import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { LookupSchemaNameRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type { LookupSchemaNameOptions } from "./types";

declare module "../Client" {
  interface Client {
    /**
     * Looks up the schema name by a schema version ID.
     * @param schemaVersionId - The schema version ID to look up.
     * @param options - Command options.
     * @returns The schema name that owns the specified version.
     */
    lookupSchemaName(
      schemaVersionId: string,
      options?: LookupSchemaNameOptions
    ): Promise<string>;
  }
}

Client.prototype.lookupSchemaName = async function (
  this: Client,
  schemaVersionId: string,
  options: LookupSchemaNameOptions = {}
): Promise<string> {
  const req = new LookupSchemaNameRequest();
  req.setSchemaVersionId(schemaVersionId);

  debug.command("lookupSchemaName: %O", {
    schemaVersionId,
    options,
  });
  debug.command_grpc("lookupSchemaName: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "lookupSchemaName",
    (client) =>
      new Promise<string>((resolve, reject) => {
        client.lookupSchemaName(
          req,
          ...this.callArguments(options),
          (error, response) => {
            if (error) return reject(convertToCommandError(error));
            return resolve(response?.getSchemaName() ?? "");
          }
        );
      })
  );
};
