/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("updateSchema", () => {
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

  describe("should update schema metadata", () => {
    test("update description", async () => {
      const schemaName = generateSchemaName();

      // Create schema
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
          description: "Original description",
        },
        { schemaDefinition: JSON.stringify({ type: "object" }) }
      );

      // Update description
      await expect(
        client.updateSchema(schemaName, {
          description: "Updated description",
        })
      ).resolves.toBeUndefined();

      // Verify update
      const schema = await client.getSchema(schemaName);
      expect(schema.details.description).toBe("Updated description");
    });

    test("update tags", async () => {
      const schemaName = generateSchemaName();

      // Create schema with initial tags
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
          tags: { initial: "tag" },
        },
        { schemaDefinition: JSON.stringify({ type: "object" }) }
      );

      // Update tags
      await expect(
        client.updateSchema(schemaName, {
          tags: { updated: "tag", another: "value" },
        })
      ).resolves.toBeUndefined();

      // Verify update
      const schema = await client.getSchema(schemaName);
      expect(schema.details.tags).toEqual({
        updated: "tag",
        another: "value",
      });
    });

    test("update both description and tags", async () => {
      const schemaName = generateSchemaName();

      // Create schema
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ type: "object" }) }
      );

      // Update both
      await expect(
        client.updateSchema(schemaName, {
          description: "New description",
          tags: { key: "value" },
        })
      ).resolves.toBeUndefined();

      // Verify update
      const schema = await client.getSchema(schemaName);
      expect(schema.details.description).toBe("New description");
      expect(schema.details.tags).toEqual({ key: "value" });
    });
  });

  describe("should handle errors", () => {
    test("error when updating non-existent schema", async () => {
      const nonExistentName = `non-existent-${Date.now()}`;

      await expect(
        client.updateSchema(nonExistentName, {
          description: "Should fail",
        })
      ).rejects.toThrow();
    });
  });
});
