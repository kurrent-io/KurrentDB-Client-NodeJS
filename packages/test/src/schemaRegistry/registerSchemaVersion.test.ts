/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("registerSchemaVersion", () => {
  const node = createTestNode();
  let client!: KurrentDBClient;

  const generateSchemaName = () =>
    `test-schema-${Date.now()}-${Math.random().toString(36).substring(7)}`;

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());
  });

  afterAll(async () => {
    await node.down();
  });

  describe("should register schema version", () => {
    test("register new version for existing schema", async () => {
      const schemaName = generateSchemaName();

      // Create schema with initial version
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ type: "object" }) }
      );

      // Register second version
      const result = await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ type: "object", version: 2 })
      );

      expect(result.schemaVersionId).toBeDefined();
      expect(result.schemaVersionId).not.toBe("");
      expect(result.versionNumber).toBe(2);
    });

    test("version number increments", async () => {
      const schemaName = generateSchemaName();

      // Create schema with initial version
      const createResult = await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ version: 1 }) }
      );

      expect(createResult.versionNumber).toBe(1);

      // Register second version
      const result2 = await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ version: 2 })
      );

      expect(result2.versionNumber).toBe(2);

      // Register third version
      const result3 = await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ version: 3 })
      );

      expect(result3.versionNumber).toBe(3);
    });

    test("register with Uint8Array definition", async () => {
      const schemaName = generateSchemaName();

      const initialDefinition = new TextEncoder().encode("initial binary data");

      await client.createSchema(
        schemaName,
        {
          dataFormat: "bytes",
          compatibility: "none",
        },
        { schemaDefinition: initialDefinition }
      );

      const definition = new TextEncoder().encode("binary data content");

      const result = await client.registerSchemaVersion(schemaName, definition);

      expect(result.schemaVersionId).toBeDefined();
      expect(result.versionNumber).toBe(2);
    });
  });

  describe("should handle errors", () => {
    test("error when registering to non-existent schema", async () => {
      const nonExistentName = `non-existent-${Date.now()}`;

      await expect(
        client.registerSchemaVersion(
          nonExistentName,
          JSON.stringify({ type: "object" })
        )
      ).rejects.toThrow();
    });
  });
});
