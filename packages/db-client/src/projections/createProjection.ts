import {
  ProjectionsClient,
  ProjectionsService,
} from "../../generated/kurrentdb/protocols/v1/projectionmanagement_grpc_pb";
import { CreateReq } from "../../generated/kurrentdb/protocols/v1/projectionmanagement_pb";

import { Client } from "../Client";
import type { BaseOptions } from "../types";
import { debug, convertToCommandError } from "../utils";

/**
 * The projection engine version used to execute a projection.
 *
 * The engine version is pinned at create time and cannot be changed later.
 */
export enum ProjectionEngineVersion {
  /** The original projection engine. This is the default. */
  V1 = "v1",
  /**
   * The next-generation projection engine that processes partitions in
   * parallel. V2 is opt-in and does not support `trackEmittedStreams`,
   * bi-state projections, or live `outputState` result streams. See the
   * KurrentDB documentation for the full list of limitations before
   * choosing V2.
   */
  V2 = "v2",
}

const ENGINE_VERSION_WIRE: Record<ProjectionEngineVersion, number> = {
  [ProjectionEngineVersion.V1]: 1,
  [ProjectionEngineVersion.V2]: 2,
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
   * cannot be changed later.
   * @defaultValue {@link ProjectionEngineVersion.V1}
   */
  engineVersion?: ProjectionEngineVersion;
}

interface ResolvedCreateProjectionOptions extends BaseOptions {
  emitEnabled: boolean;
  trackEmittedStreams: boolean;
  engineVersion: ProjectionEngineVersion;
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
  {
    emitEnabled = false,
    trackEmittedStreams = false,
    engineVersion = ProjectionEngineVersion.V1,
    ...baseOptions
  }: CreateProjectionOptions = {}
): Promise<void> {
  const resolved: ResolvedCreateProjectionOptions = {
    emitEnabled,
    trackEmittedStreams,
    engineVersion,
    ...baseOptions,
  };

  debug.command("createProjection: %O", {
    projectionName,
    query,
    options: resolved,
  });

  if (
    trackEmittedStreams &&
    !(await this.supports(ProjectionsService.create, "track_emitted_streams"))
  ) {
    return createProjectionHTTP.call(this, projectionName, query, resolved);
  }

  return createProjectionGRPC.call(this, projectionName, query, resolved);
};

const createProjectionGRPC = async function (
  this: Client,
  projectionName: string,
  query: string,
  {
    emitEnabled,
    trackEmittedStreams,
    engineVersion,
    ...baseOptions
  }: ResolvedCreateProjectionOptions
): Promise<void> {
  const req = new CreateReq();
  const options = new CreateReq.Options();
  const continuous = new CreateReq.Options.Continuous();

  continuous.setName(projectionName);
  continuous.setEmitEnabled(emitEnabled);
  continuous.setTrackEmittedStreams(trackEmittedStreams);

  options.setContinuous(continuous);
  options.setQuery(query);
  options.setEngineVersion(ENGINE_VERSION_WIRE[engineVersion]);

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
    emitEnabled,
    trackEmittedStreams,
    engineVersion,
    ...baseOptions
  }: ResolvedCreateProjectionOptions
) {
  await this.HTTPRequest(
    "POST",
    `/projections/continuous`,
    {
      ...baseOptions,
      searchParams: {
        name: projectionName,
        emit: String(emitEnabled),
        trackemittedstreams: String(trackEmittedStreams),
        engineversion: String(ENGINE_VERSION_WIRE[engineVersion]),
      },
    },
    query
  );
};
