/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("deleteSchema", () => {
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

  describe("should delete schema", () => {
    test("delete existing schema", async () => {
      const schemaName = generateSchemaName();

      // Create schema
      await client.createSchema(schemaName, {
        dataFormat: "json",
        compatibility: "none",
      });

      // Verify it exists
      const schemaBefore = await client.getSchema(schemaName);
      expect(schemaBefore.schemaName).toBe(schemaName);

      // Delete schema
      await expect(client.deleteSchema(schemaName)).resolves.toBeUndefined();

      // Verify it's deleted
      await expect(client.getSchema(schemaName)).rejects.toThrow();
    });

    test("delete schema with versions", async () => {
      const schemaName = generateSchemaName();
      const definition = JSON.stringify({ type: "object" });

      // Create schema with initial definition
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: definition }
      );

      // Register additional version
      await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ type: "object", properties: {} })
      );

      // Delete schema (should delete all versions)
      await expect(client.deleteSchema(schemaName)).resolves.toBeUndefined();

      // Verify it's deleted
      await expect(client.getSchema(schemaName)).rejects.toThrow();
    });
  });

  describe("should handle errors", () => {
    test("error when deleting non-existent schema", async () => {
      const nonExistentName = `non-existent-${Date.now()}`;

      await expect(client.deleteSchema(nonExistentName)).rejects.toThrow();
    });
  });
});
