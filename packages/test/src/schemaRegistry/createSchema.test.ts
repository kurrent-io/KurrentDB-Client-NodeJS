/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("createSchema", () => {
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

  describe("should create a schema", () => {
    test("with metadata only", async () => {
      const schemaName = generateSchemaName();

      const result = await client.createSchema(schemaName, {
        dataFormat: "json",
        compatibility: "backward",
        description: "Test schema without definition",
      });

      expect(result).toBeDefined();
      expect(result.schemaVersionId).toBeUndefined();
      expect(result.versionNumber).toBeUndefined();
    });

    test("with initial definition", async () => {
      const schemaName = generateSchemaName();
      const definition = JSON.stringify({
        type: "object",
        properties: {
          name: { type: "string" },
          age: { type: "number" },
        },
      });

      const result = await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "backward",
          description: "Test schema with definition",
        },
        { schemaDefinition: definition }
      );

      expect(result).toBeDefined();
      expect(result.schemaVersionId).toBeDefined();
      expect(result.schemaVersionId).not.toBe("");
      expect(result.versionNumber).toBe(1);
    });

    test("with tags", async () => {
      const schemaName = generateSchemaName();

      const result = await client.createSchema(schemaName, {
        dataFormat: "json",
        compatibility: "none",
        tags: {
          environment: "test",
          owner: "test-suite",
        },
      });

      expect(result).toBeDefined();
    });

    test("with different data formats", async () => {
      const formats = ["json", "protobuf", "avro", "bytes"] as const;

      for (const dataFormat of formats) {
        const schemaName = generateSchemaName();

        const result = await client.createSchema(schemaName, {
          dataFormat,
          compatibility: "none",
        });

        expect(result).toBeDefined();
      }
    });
  });

  describe("should handle errors", () => {
    test("duplicate schema name", async () => {
      const schemaName = generateSchemaName();

      // Create first schema
      await client.createSchema(schemaName, {
        dataFormat: "json",
        compatibility: "none",
      });

      // Attempt to create duplicate
      await expect(
        client.createSchema(schemaName, {
          dataFormat: "json",
          compatibility: "none",
        })
      ).rejects.toThrow();
    });
  });
});
