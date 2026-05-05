import {
  ProjectionsClient,
  ProjectionsService,
} from "../../generated/kurrentdb/protocols/v1/projectionmanagement_grpc_pb";
import { CreateReq } from "../../generated/kurrentdb/protocols/v1/projectionmanagement_pb";

import { Client } from "../Client";
import { PROJECTION_ENGINE_V1, PROJECTION_ENGINE_V2 } from "../constants";
import type { BaseOptions, ProjectionEngineVersion } from "../types";
import { debug, convertToCommandError } from "../utils";

const ENGINE_VERSION_WIRE: Record<ProjectionEngineVersion, number> = {
  [PROJECTION_ENGINE_V1]: 1,
  [PROJECTION_ENGINE_V2]: 2,
};

export interface CreateProjectionOptions extends BaseOptions {
  /**
   * Enables emitting from the projection.
   * @defaultValue false
   */
  emitEnabled?: boolean;
  /**
   * Enables tracking emitted streams.
   * @defaultValue false
   */
  trackEmittedStreams?: boolean;
  /**
   * Selects the projection engine version. Pinned at create time and
   * cannot be changed later. V2 is opt-in and does not support
   * `trackEmittedStreams`, bi-state projections, or live `outputState`
   * result streams. See the KurrentDB documentation for the full list of
   * limitations before choosing V2.
   * @defaultValue {@link PROJECTION_ENGINE_V1}
   */
  engineVersion?: ProjectionEngineVersion;
}

declare module "../Client" {
  interface Client {
    /**
     * Creates a continuous projection.
     * @param projectionName - The name of the projection.
     * @param query - The query to run.
     * @param options - Projection options.
     */
    createProjection(
      projectionName: string,
      query: string,
      options?: CreateProjectionOptions
    ): Promise<void>;
  }
}

Client.prototype.createProjection = async function (
  this: Client,
  projectionName: string,
  query: string,
  options: CreateProjectionOptions = {}
): Promise<void> {
  debug.command("createProjection: %O", {
    projectionName,
    query,
    options,
  });

  if (
    options.trackEmittedStreams &&
    !(await this.supports(ProjectionsService.create, "track_emitted_streams"))
  ) {
    return createProjectionHTTP.call(this, projectionName, query, options);
  }

  return createProjectionGRPC.call(this, projectionName, query, options);
};

const createProjectionGRPC = async function (
  this: Client,
  projectionName: string,
  query: string,
  {
    emitEnabled = false,
    trackEmittedStreams = false,
    engineVersion = PROJECTION_ENGINE_V1,
    ...baseOptions
  }: CreateProjectionOptions = {}
): Promise<void> {
  const req = new CreateReq();
  const options = new CreateReq.Options();
  const continuous = new CreateReq.Options.Continuous();

  continuous.setName(projectionName);
  continuous.setEmitEnabled(emitEnabled);
  continuous.setTrackEmittedStreams(trackEmittedStreams);

  options.setContinuous(continuous);
  options.setQuery(query);
  if (engineVersion === PROJECTION_ENGINE_V2) {
    options.setEngineVersion(ENGINE_VERSION_WIRE[engineVersion]);
  }

  req.setOptions(options);

  debug.command_grpc("createProjection: %g", req);

  return this.execute(
    ProjectionsClient,
    "createProjection",
    (client) =>
      new Promise<void>((resolve, reject) => {
        client.create(req, ...this.callArguments(baseOptions), (error) => {
          if (error) return reject(convertToCommandError(error));
          return resolve();
        });
      })
  );
};

const createProjectionHTTP = async function (
  this: Client,
  projectionName: string,
  query: string,
  {
    emitEnabled = false,
    trackEmittedStreams = false,
    engineVersion = PROJECTION_ENGINE_V1,
    ...baseOptions
  }: CreateProjectionOptions = {}
) {
  await this.HTTPRequest(
    "POST",
    `/projections/continuous`,
    {
      ...baseOptions,
      searchParams: {
        name: projectionName,
        emit: emitEnabled.toString(),
        trackemittedstreams: trackEmittedStreams.toString(),
        ...(engineVersion === PROJECTION_ENGINE_V2 && {
          engineversion: ENGINE_VERSION_WIRE[engineVersion].toString(),
        }),
      },
    },
    query
  );
};
