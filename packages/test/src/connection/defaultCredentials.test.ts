import { collect, createTestNode, jsonTestEvents } from "@test-utils";
import {
  KurrentDBClient,
  AccessDeniedError,
  type BasicCredentials,
} from "@kurrent/kurrentdb-client";

const adminBasic: BasicCredentials = {
  username: "admin",
  password: "changeit",
};

const wrongBasic: BasicCredentials = {
  username: "AzureDiamond",
  password: "hunter2",
};

describe("defaultCredentials", () => {
  const node = createTestNode();

  beforeAll(async () => {
    await node.up();
  });

  afterAll(async () => {
    await node.down();
  });

  describe("should set default credentials to be used by commands", () => {
    test("bad override", async () => {
      const client = KurrentDBClient.connectionString(node.connectionString());
      await expect(
        collect(client.readAll({ maxCount: 10 }))
      ).resolves.toBeDefined();
      try {
        await collect(
          client.readAll({
            maxCount: 10,
            credentials: wrongBasic,
          })
        );
      } catch (e) {
        expect(e).toBeInstanceOf(AccessDeniedError);
      }
    });

    test("good override", async () => {
      const client = KurrentDBClient.connectionString(
        node.connectionStringWithOverrides({
          defaultUserCredentials: {
            username: "AzureDiamond",
            password: "hunter2",
          },
        })
      );

      try {
        await collect(client.readAll({ maxCount: 10 }));
      } catch (e) {
        expect(e).toBeInstanceOf(AccessDeniedError);
      }
      await expect(
        collect(
          client.readAll({
            maxCount: 10,
            credentials: adminBasic,
          })
        )
      ).resolves.toBeDefined();
    });
  });

  describe("bearer-token credentials", () => {
    test("unknown token rejected with AccessDenied", async () => {
      const client = KurrentDBClient.connectionString(node.connectionString());

      await expect(
        client.appendToStream("bearer-rejected-stream", jsonTestEvents(1), {
          credentials: { bearerToken: "not-a-real-token" },
        })
      ).rejects.toBeInstanceOf(AccessDeniedError);
    });
  });

  describe("credentialsProvider", () => {
    test("returns fresh credentials per RPC", async () => {
      const client = KurrentDBClient.connectionString(node.connectionString());

      const provider = jest
        .fn<BasicCredentials, []>()
        .mockReturnValueOnce(adminBasic)
        .mockReturnValueOnce(wrongBasic)
        .mockReturnValueOnce(adminBasic);
      client.setCredentialsProvider(provider);

      const stream = "auth-provider-stream";
      await expect(
        client.appendToStream(stream, jsonTestEvents(1))
      ).resolves.toBeDefined();
      await expect(
        client.appendToStream(stream, jsonTestEvents(1))
      ).rejects.toBeInstanceOf(AccessDeniedError);
      await expect(
        client.appendToStream(stream, jsonTestEvents(1))
      ).resolves.toBeDefined();

      expect(provider).toHaveBeenCalledTimes(3);
    });

    test("per-call credentials override the provider", async () => {
      const client = KurrentDBClient.connectionString(node.connectionString());

      let calls = 0;
      client.setCredentialsProvider(() => {
        calls += 1;
        return { bearerToken: "should-never-be-used" };
      });

      await expect(
        client.appendToStream("auth-override-stream", jsonTestEvents(1), {
          credentials: adminBasic,
        })
      ).resolves.toBeDefined();
      expect(calls).toBe(0);
    });

    test("bearer token reaches bridge-backed readAll", async () => {
      const client = KurrentDBClient.connectionString(node.connectionString());

      let calls = 0;
      client.setCredentialsProvider(() => {
        calls += 1;
        return { bearerToken: "not-a-real-token" };
      });

      await expect(
        collect(client.readAll({ maxCount: 1 }))
      ).rejects.toBeInstanceOf(AccessDeniedError);
      expect(calls).toBe(1);
    });
  });
});
