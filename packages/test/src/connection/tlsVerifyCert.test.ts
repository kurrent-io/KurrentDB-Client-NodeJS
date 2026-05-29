import { collect, createTestNode, jsonTestEvents } from "@test-utils";
import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("tlsVerifyCert", () => {
  const node = createTestNode();

  beforeAll(async () => {
    await node.up();
  });

  afterAll(async () => {
    await node.down();
  });

  test("Connects to a node with an untrusted certificate when set to false", async () => {
    const STREAM_NAME = "tls_verify_cert_false_stream";

    const client = KurrentDBClient.connectionString`kurrentdb://admin:changeit@${node.uri}?tlsVerifyCert=false`;

    const appendResult = await client.appendToStream(
      STREAM_NAME,
      jsonTestEvents()
    );
    const readResult = await collect(
      client.readStream(STREAM_NAME, { maxCount: 10 })
    );

    expect(appendResult).toBeDefined();
    expect(readResult).toBeDefined();
  });
});
