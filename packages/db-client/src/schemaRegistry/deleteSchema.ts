import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import { DeleteSchemaRequest } from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type { DeleteSchemaOptions } from "./types";

declare module "../Client" {
  interface Client {
    /**
     * Deletes a schema and all its versions from the registry.
     * @param schemaName - The name of the schema to delete.
     * @param options - Command options.
     */
    deleteSchema(
      schemaName: string,
      options?: DeleteSchemaOptions
    ): Promise<void>;
  }
}

Client.prototype.deleteSchema = async function (
  this: Client,
  schemaName: string,
  options: DeleteSchemaOptions = {}
): Promise<void> {
  const req = new DeleteSchemaRequest();
  req.setSchemaName(schemaName);

  debug.command("deleteSchema: %O", {
    schemaName,
    options,
  });
  debug.command_grpc("deleteSchema: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "deleteSchema",
    (client) =>
      new Promise<void>((resolve, reject) => {
        client.deleteSchema(req, ...this.callArguments(options), (error) => {
          if (error) return reject(convertToCommandError(error));
          return resolve();
        });
      })
  );
};
