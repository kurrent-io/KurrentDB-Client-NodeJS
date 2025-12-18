import { FieldMask } from "google-protobuf/google/protobuf/field_mask_pb";

import { SchemaRegistryServiceClient } from "../../generated/kurrentdb/protocols/v2/registry/service_grpc_pb";
import {
  UpdateSchemaRequest,
  SchemaDetails as GrpcSchemaDetails,
} from "../../generated/kurrentdb/protocols/v2/registry/schemas_pb";

import { Client } from "../Client";
import { debug, convertToCommandError } from "../utils";

import type { UpdateSchemaOptions } from "./types";

declare module "../Client" {
  interface Client {
    /**
     * Updates schema metadata (description and/or tags).
     * @param schemaName - The name of the schema to update.
     * @param options - The update options including description and tags to update.
     */
    updateSchema(
      schemaName: string,
      options?: UpdateSchemaOptions
    ): Promise<void>;
  }
}

Client.prototype.updateSchema = async function (
  this: Client,
  schemaName: string,
  options: UpdateSchemaOptions = {}
): Promise<void> {
  const { description, tags, ...baseOptions } = options;

  const req = new UpdateSchemaRequest();
  req.setSchemaName(schemaName);

  const details = new GrpcSchemaDetails();
  const updatePaths: string[] = [];

  if (description !== undefined) {
    details.setDescription(description);
    updatePaths.push("description");
  }

  if (tags !== undefined) {
    const tagsMap = details.getTagsMap();
    for (const [key, value] of Object.entries(tags)) {
      tagsMap.set(key, value);
    }
    updatePaths.push("tags");
  }

  req.setDetails(details);

  if (updatePaths.length > 0) {
    const fieldMask = new FieldMask();
    fieldMask.setPathsList(updatePaths);
    req.setUpdateMask(fieldMask);
  }

  debug.command("updateSchema: %O", {
    schemaName,
    description,
    tags,
    updatePaths,
    options: baseOptions,
  });
  debug.command_grpc("updateSchema: %g", req);

  return this.execute(
    SchemaRegistryServiceClient,
    "updateSchema",
    (client) =>
      new Promise<void>((resolve, reject) => {
        client.updateSchema(
          req,
          ...this.callArguments(baseOptions),
          (error) => {
            if (error) return reject(convertToCommandError(error));
            return resolve();
          }
        );
      })
  );
};
