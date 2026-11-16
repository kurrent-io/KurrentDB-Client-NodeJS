import { createServer, type AddressInfo, type Server } from "net";

import {
  jsonEvent,
  KurrentDBClient,
  UnavailableError,
} from "@kurrent/kurrentdb-client";

// https://github.com/kurrent-io/KurrentDB-Client-NodeJS/issues/538
describe("reconnect", () => {
  // Stands in for a cluster with no usable node: it accepts the gossip
  // connection and drops it, so every discovery attempt fails and is counted.
  let seed: Server;
  let gossipConnections: number;
  let client: KurrentDBClient;

  beforeEach(async () => {
    gossipConnections = 0;
    seed = createServer((socket) => {
      gossipConnections++;
      socket.destroy();
    });
    await new Promise<void>((resolve) => seed.listen(0, "127.0.0.1", resolve));
    const { port } = seed.address() as AddressInfo;

    client = KurrentDBClient.connectionString`kurrentdb+discover://127.0.0.1:${port}?tls=false&maxDiscoverAttempts=2&discoveryInterval=10&gossipTimeout=1`;
  });

  afterEach(async () => {
    await client.dispose();
    await new Promise((resolve) => seed.close(resolve));
  });

  test("a failed discovery is retried by the next call", async () => {
    const append = () =>
      client.appendToStream(
        "failed-discovery",
        jsonEvent({ type: "test", data: { message: "test" } })
      );

    await expect(append()).rejects.toThrow(
      "Failed to discover after 2 attempts."
    );
    const connectionsAfterFirstFailure = gossipConnections;
    expect(connectionsAfterFirstFailure).toBeGreaterThan(0);

    await expect(append()).rejects.toThrow(
      "Failed to discover after 2 attempts."
    );
    expect(gossipConnections).toBeGreaterThan(connectionsAfterFirstFailure);
  });

  test("a late error from a previous channel is not an unhandled rejection", async () => {
    const unhandled: unknown[] = [];
    const collectUnhandled = (reason: unknown) => unhandled.push(reason);
    process.on("unhandledRejection", collectUnhandled);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const internals = client as any;

      // The current channel is now a discovery that is going to fail.
      const discovery: Promise<unknown> = internals.getChannel();

      // Meanwhile a request on the channel this one replaced fails. As in
      // execute and GRPCStreamCreator, nothing awaits handleError.
      const previousChannel = {};
      internals.handleError(
        { getChannel: () => previousChannel },
        new UnavailableError()
      );

      await expect(discovery).rejects.toThrow(
        "Failed to discover after 2 attempts."
      );

      // Give an orphaned rejection a turn of the loop to surface.
      await new Promise((r) => setImmediate(r));
      expect(unhandled).toEqual([]);
    } finally {
      process.off("unhandledRejection", collectUnhandled);
    }
  });
});
