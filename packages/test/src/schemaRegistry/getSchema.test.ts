/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("getSchema", () => {
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

  describe("should retrieve schema metadata", () => {
    test("get schema with all properties", async () => {
      const schemaName = generateSchemaName();

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "backward",
          description: "Test description",
          tags: { env: "test" },
        },
        { schemaDefinition: JSON.stringify({ type: "object" }) }
      );

      const schema = await client.getSchema(schemaName);

      expect(schema.schemaName).toBe(schemaName);
      expect(schema.details.dataFormat).toBe("json");
      expect(schema.details.compatibility).toBe("backward");
      expect(schema.details.description).toBe("Test description");
      expect(schema.details.tags).toEqual({ env: "test" });
      expect(schema.latestSchemaVersion).toBe(1);
    });

    test("timestamps are populated", async () => {
      const schemaName = generateSchemaName();

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ type: "object" }) }
      );

      const schema = await client.getSchema(schemaName);

      expect(schema.createdAt).toBeDefined();
      expect(schema.createdAt).toBeInstanceOf(Date);
    });

    test("latest version number after adding versions", async () => {
      const schemaName = generateSchemaName();
      const definition = JSON.stringify({ type: "object" });

      // Create schema with initial version
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: definition }
      );

      let schema = await client.getSchema(schemaName);
      expect(schema.latestSchemaVersion).toBe(1);

      // Register second version
      await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ type: "object", properties: {} })
      );

      schema = await client.getSchema(schemaName);
      expect(schema.latestSchemaVersion).toBe(2);
    });
  });

  describe("should handle errors", () => {
    test("error when getting non-existent schema", async () => {
      const nonExistentName = `non-existent-${Date.now()}`;

      await expect(client.getSchema(nonExistentName)).rejects.toThrow();
    });
  });
});
