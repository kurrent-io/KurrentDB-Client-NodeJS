/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("deleteSchemaVersions", () => {
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

  describe("should delete schema versions", () => {
    test("delete specific version number", async () => {
      const schemaName = generateSchemaName();

      // Create schema with multiple versions
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ v: 1 }) }
      );

      await client.registerSchemaVersion(schemaName, JSON.stringify({ v: 2 }));

      await client.registerSchemaVersion(schemaName, JSON.stringify({ v: 3 }));

      // Delete version 2
      const result = await client.deleteSchemaVersions(schemaName, [2]);

      expect(result).toBeDefined();
      expect(Array.isArray(result.errors)).toBe(true);

      // Verify version 2 is deleted
      await expect(
        client.getSchemaVersion(schemaName, { versionNumber: 2 })
      ).rejects.toThrow();

      // Verify other versions still exist
      const v1 = await client.getSchemaVersion(schemaName, {
        versionNumber: 1,
      });
      const v3 = await client.getSchemaVersion(schemaName, {
        versionNumber: 3,
      });
      expect(v1.versionNumber).toBe(1);
      expect(v3.versionNumber).toBe(3);
    });

    test("delete multiple versions", async () => {
      const schemaName = generateSchemaName();

      // Create schema with multiple versions
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ v: 1 }) }
      );

      await client.registerSchemaVersion(schemaName, JSON.stringify({ v: 2 }));

      await client.registerSchemaVersion(schemaName, JSON.stringify({ v: 3 }));

      // Delete versions 1 and 2
      const result = await client.deleteSchemaVersions(schemaName, [1, 2]);

      expect(result).toBeDefined();

      // Verify version 3 still exists
      const v3 = await client.getSchemaVersion(schemaName, {
        versionNumber: 3,
      });
      expect(v3.versionNumber).toBe(3);
    });
  });

  describe("should handle errors", () => {
    test("error handling for non-existent versions", async () => {
      const schemaName = generateSchemaName();

      // Create schema with one version
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ v: 1 }) }
      );

      // Try to delete non-existent versions
      const result = await client.deleteSchemaVersions(schemaName, [99, 100]);

      // Response should contain error information
      expect(result).toBeDefined();
      expect(Array.isArray(result.errors)).toBe(true);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    test("partial failures in error list", async () => {
      const schemaName = generateSchemaName();

      // Create schema with versions 1 and 2
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ v: 1 }) }
      );

      await client.registerSchemaVersion(schemaName, JSON.stringify({ v: 2 }));

      // Delete mix of existing and non-existing versions
      const result = await client.deleteSchemaVersions(schemaName, [1, 999]);

      expect(result).toBeDefined();
      expect(Array.isArray(result.errors)).toBe(true);

      // Check that error list contains the non-existent version
      const errorVersions = result.errors.map((e) => e.versionNumber);
      expect(errorVersions).toContain(999);
    });
  });
});
