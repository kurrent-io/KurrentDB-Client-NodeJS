import { createServer, type AddressInfo, type Server } from "net";

import { jsonEvent, KurrentDBClient } from "@kurrent/kurrentdb-client";

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
});
