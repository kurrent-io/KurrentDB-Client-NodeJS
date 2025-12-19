/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("lookupSchemaName", () => {
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

  describe("should lookup schema name", () => {
    test("lookup by version ID", async () => {
      const schemaName = generateSchemaName();
      const definition = JSON.stringify({ type: "object" });

      // Create schema with initial version
      const result = await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: definition }
      );

      expect(result.schemaVersionId).toBeDefined();

      // Lookup schema name by version ID
      const foundName = await client.lookupSchemaName(result.schemaVersionId!);

      expect(foundName).toBe(schemaName);
    });

    test("lookup by version ID from registered version", async () => {
      const schemaName = generateSchemaName();

      // Create schema with initial version
      const createResult = await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ type: "object" }) }
      );

      // Register another version
      const versionResult = await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ type: "string" })
      );

      // Lookup schema name
      const foundName = await client.lookupSchemaName(
        versionResult.schemaVersionId
      );

      expect(foundName).toBe(schemaName);
    });
  });

  describe("should handle errors", () => {
    test("error when looking up non-existent version ID", async () => {
      const fakeVersionId = "00000000-0000-0000-0000-000000000000";

      await expect(client.lookupSchemaName(fakeVersionId)).rejects.toThrow();
    });
  });
});
