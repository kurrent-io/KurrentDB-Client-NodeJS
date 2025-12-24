/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode, matchServerVersion, optionalDescribe } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("updateSchema", () => {
  const supported = matchServerVersion`>=25.1`;

  const node = createTestNode();
  let client!: KurrentDBClient;

  const generateSchemaName = () =>
    `test-schema-${Date.now()}-${Math.random().toString(36).substring(7)}`;

  const waitForUpdate = async (
    schemaName: string,
    check: (schema: Awaited<ReturnType<typeof client.getSchema>>) => boolean,
    maxAttempts = 10
  ) => {
    for (let i = 0; i < maxAttempts; i++) {
      const schema = await client.getSchema(schemaName);
      if (check(schema)) {
        return schema;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error(`Schema ${schemaName} update did not propagate after ${maxAttempts} attempts`);
  };

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());
  });

  afterAll(async () => {
    await node.down();
  });

  optionalDescribe(supported)("should update schema metadata", () => {
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
          dataFormat: "json",
          compatibility: "none",
          description: "Updated description"
        })
      ).resolves.toBeUndefined();

      // Verify update
      const schema = await waitForUpdate(
        schemaName,
        (s) => s.details.description === "Updated description"
      );
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
          dataFormat: "json",
          compatibility: "none",
          tags: { updated: "tag", another: "value" }
        })
      ).resolves.toBeUndefined();

      // Verify update
      const schema = await waitForUpdate(
        schemaName,
        (s) => s.details.tags?.updated === "tag" && s.details.tags?.another === "value"
      );
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
          dataFormat: "json",
          compatibility: "none",
          description: "New description",
          tags: { key: "value" }
        })
      ).resolves.toBeUndefined();

      // Verify update
      const schema = await waitForUpdate(
        schemaName,
        (s) => s.details.description === "New description" && s.details.tags?.key === "value"
      );
      expect(schema.details.description).toBe("New description");
      expect(schema.details.tags).toEqual({ key: "value" });
    });
  });

  describe("should handle errors", () => {
    test("error when updating non-existent schema", async () => {
      const nonExistentName = `non-existent-${Date.now()}`;

      await expect(
        client.updateSchema(nonExistentName, {
          dataFormat: "json",
          compatibility: "none",
          description: "Should fail"
        })
      ).rejects.toThrow();
    });
  });
});
