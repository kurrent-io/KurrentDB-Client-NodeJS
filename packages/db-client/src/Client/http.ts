import type { Channel } from "@grpc/grpc-js";

import { IncomingMessage, request as httpRequest } from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";

import type { Credentials, BaseOptions } from "../types";
import { AccessDeniedError, debug, UnknownError } from "../utils";

import type { ChannelCredentialOptions, Client } from "./";

type TransformError = (
  statusCode: number,
  statusMessage: string,
  res: IncomingMessage
) => Error | undefined;

export interface HTTPRequestOptions extends BaseOptions {
  headers?: Record<string, string>;
  searchParams?: Record<string, string | undefined>;
  transformError?: TransformError;
}

type HTTPMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

/**
 * Resolve the verbatim `Authorization` header for an HTTP fallback request,
 * given an optional per-call credential. Returning `undefined` skips the
 * header entirely (e.g. insecure mode).
 */
export type ResolveAuthorizationHeader = (
  perCallCredentials?: Credentials
) => Promise<string | undefined>;

export class HTTP {
  #client!: Client;
  #channelCredentials!: ChannelCredentialOptions;
  #resolveAuthorizationHeader: ResolveAuthorizationHeader;
  #insecure: boolean;

  constructor(
    client: Client,
    channelCredentials: ChannelCredentialOptions,
    resolveAuthorizationHeader: ResolveAuthorizationHeader
  ) {
    this.#client = client;
    this.#channelCredentials = channelCredentials;
    this.#resolveAuthorizationHeader = resolveAuthorizationHeader;
    this.#insecure = !!channelCredentials.insecure;
  }

  public request = async <T = unknown>(
    method: HTTPMethod,
    path: string,
    { searchParams, ...options }: HTTPRequestOptions,
    body?: string
  ): Promise<T> => {
    const url = await this.createURL(path, searchParams);
    return this.makeRequest<T>(method, url, options, body);
  };

  private makeRequest = async <T = unknown>(
    method: HTTPMethod,
    url: URL,
    options: HTTPRequestOptions,
    body?: string
  ): Promise<T> => {
    const authorization = await this.#resolveAuthorizationHeader(
      options.credentials
    );

    return new Promise<T>((resolve, reject) => {
      const headers: Record<string, string> = {
        "content-type": "application/json",
        ...(options.headers ?? {}),
      };

      if (authorization) {
        headers["Authorization"] = authorization;
      }

      const ca = this.#channelCredentials.rootCertificate
        ? [this.#channelCredentials.rootCertificate]
        : undefined;

      const callback = (res: IncomingMessage) => {
        if (res.statusCode === 307) {
          return resolve(
            this.makeRequest(
              method,
              new URL(res.headers.location!, url),
              options,
              body
            )
          );
        }

        if (res.statusCode! < 200 || res.statusCode! >= 300) {
          const error =
            options.transformError?.(
              res.statusCode!,
              res.statusMessage!,
              res
            ) ??
            defaultTransformError(res.statusCode!, res.statusMessage!, res);

          return reject(error);
        }

        let response = "";
        res.on("data", (d) => {
          response += d;
        });

        res.on("end", () => {
          return resolve(JSON.parse(response));
        });
      };

      debug.connection(
        `Making %s call to %s with headers %h`,
        method,
        url.toString(),
        authorization ? { ...headers, Authorization: "[REDACTED]" } : headers
      );

      const req = this.#insecure
        ? httpRequest(
            url,
            {
              method,
              headers,
            },
            callback
          )
        : httpsRequest(
            url,
            {
              method,
              headers,
              ca,
            },
            callback
          );

      req.on("error", (error) => {
        reject(error);
      });

      if (body) {
        req.write(body);
      }

      req.end();
    });
  };

  private createURL = async (
    pathname: string,
    searchParams: Record<string, string | undefined> = {}
  ): Promise<URL> => {
    const channel = await this.getChannel.call(this.#client);
    const protocol = this.#insecure ? "http://" : "https://";
    const target = channel.getTarget().replace(/^[a-z]*:/, protocol);
    const url = new URL(target);
    url.pathname = pathname;

    for (const [key, value] of Object.entries(searchParams)) {
      if (value != null) {
        url.searchParams.set(key, value);
      }
    }

    return url;
  };

  private getChannel(this: Client): Promise<Channel> {
    return this.getChannel();
  }
}

const defaultTransformError: TransformError = (statusCode, statusMessage) => {
  switch (statusCode) {
    case 401: {
      return new AccessDeniedError();
    }
  }

  return new UnknownError(undefined, statusMessage);
};
