/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode, matchServerVersion, optionalDescribe } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("deleteSchema", () => {
  const supported = matchServerVersion`>=25.1`;

  const node = createTestNode();
  let client!: KurrentDBClient;

  const generateSchemaName = () =>
    `test-schema-${Date.now()}-${Math.random().toString(36).substring(7)}`;

  const waitForDeletion = async (schemaName: string, maxAttempts = 10) => {
    for (let i = 0; i < maxAttempts; i++) {
      try {
        await client.getSchema(schemaName);
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        return;
      }
    }
    throw new Error(`Schema ${schemaName} was not deleted after ${maxAttempts} attempts`);
  };

  beforeAll(async () => {
    await node.up();
  });

  afterAll(async () => {
    await node.down();
  });

  optionalDescribe(supported)("should delete schema", () => {
    test("delete existing schema", async () => {
      const schemaName = generateSchemaName();

      // Create schema
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
          description: "Test schema with definition",
        },
        { schemaDefinition: JSON.stringify({ type: "object" }) }
      );

      // Verify it exists
      const schemaBefore = await client.getSchema(schemaName);
      expect(schemaBefore.schemaName).toBe(schemaName);

      // Delete schema
      await expect(client.deleteSchema(schemaName)).resolves.toBeUndefined();

      // Verify it's deleted
      await waitForDeletion(schemaName);
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
      await waitForDeletion(schemaName);
    });
  });

  describe("should handle errors", () => {
    test("error when deleting non-existent schema", async () => {
      const nonExistentName = `non-existent-${Date.now()}`;

      await expect(client.deleteSchema(nonExistentName)).rejects.toThrow();
    });
  });
});
