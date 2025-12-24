/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  createTestNode,
  delay,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("listSchemaVersions", () => {
  const supported = matchServerVersion`>=25.1`;

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

  optionalDescribe(supported)("should list schema versions", () => {
    test("list all versions of schema", async () => {
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

      // Wait a moment to ensure the registry is updated
      await delay(100);

      const versions = await client.listSchemaVersions(schemaName);

      expect(Array.isArray(versions)).toBe(true);
      expect(versions.length).toBe(3);

      const versionNumbers = versions.map((v) => v.versionNumber).sort();
      expect(versionNumbers).toEqual([1, 2, 3]);
    });

    test("with includeDefinition: false (default)", async () => {
      const schemaName = generateSchemaName();

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ data: "test" }) }
      );

      // Wait a moment to ensure the registry is updated
      await delay(100);

      const versions = await client.listSchemaVersions(schemaName, {
        includeDefinition: false,
      });

      expect(versions.length).toBe(1);
      // Definition should be empty when not included
      expect(versions[0].schemaDefinition.length).toBe(0);
    });

    test("with includeDefinition: true", async () => {
      const schemaName = generateSchemaName();
      const definitionObj = { data: "test-with-definition" };

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify(definitionObj) }
      );

      // Wait a moment to ensure the registry is updated
      await delay(100);

      const versions = await client.listSchemaVersions(schemaName, {
        includeDefinition: true,
      });

      expect(versions.length).toBe(1);
      expect(versions[0].schemaDefinition).toBeDefined();
      expect(versions[0].schemaDefinition.length).toBeGreaterThan(0);

      const decoded = new TextDecoder().decode(versions[0].schemaDefinition);
      expect(JSON.parse(decoded)).toEqual(definitionObj);
    });

    test("versions have correct metadata", async () => {
      const schemaName = generateSchemaName();

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ v: 1 }) }
      );

      // Wait a moment to ensure the registry is updated
      await delay(100);

      const versions = await client.listSchemaVersions(schemaName);

      expect(versions[0].schemaVersionId).toBeDefined();
      expect(versions[0].versionNumber).toBe(1);
      expect(versions[0].dataFormat).toBe("json");
      expect(versions[0].registeredAt).toBeDefined();
    });
  });

  describe("should handle errors", () => {
    test("error when listing non-existent schema", async () => {
      const nonExistentName = `non-existent-${Date.now()}`;

      await expect(
        client.listSchemaVersions(nonExistentName)
      ).rejects.toThrow();
    });
  });
});
