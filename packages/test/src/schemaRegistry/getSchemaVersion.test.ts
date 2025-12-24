/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  createTestNode,
  delay,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("getSchemaVersion", () => {
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

  optionalDescribe(supported)("should get schema version", () => {
    test("get latest version (no version number specified)", async () => {
      const schemaName = generateSchemaName();

      // Create schema with multiple versions
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ version: 1 }) }
      );

      await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ version: 2 })
      );

      await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ version: 3 })
      );

      // Ensure any eventual consistency
      await delay(100);

      // Get latest version (should be 3)
      const version = await client.getSchemaVersion(schemaName);

      expect(version.versionNumber).toBe(3);
      expect(version.schemaVersionId).toBeDefined();
      expect(version.dataFormat).toBe("json");
    });

    test("get specific version by number", async () => {
      const schemaName = generateSchemaName();

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ version: 1 }) }
      );

      await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ version: 2 })
      );

      // Ensure any eventual consistency
      await delay(100);

      // Get version 1 specifically
      const version = await client.getSchemaVersion(schemaName, {
        versionNumber: 1,
      });

      expect(version.versionNumber).toBe(1);
      expect(version.schemaVersionId).toBeDefined();
    });

    test("schema definition is included", async () => {
      const schemaName = generateSchemaName();
      const definitionObj = {
        type: "object",
        properties: { name: { type: "string" } },
      };
      const definition = JSON.stringify(definitionObj);

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: definition }
      );

      // Ensure any eventual consistency
      await delay(100);

      const version = await client.getSchemaVersion(schemaName);

      expect(version.schemaDefinition).toBeDefined();
      expect(version.schemaDefinition).toBeInstanceOf(Uint8Array);

      // Decode and verify content
      const decoded = new TextDecoder().decode(version.schemaDefinition);
      expect(JSON.parse(decoded)).toEqual(definitionObj);
    });

    test("timestamps are populated", async () => {
      const schemaName = generateSchemaName();

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ v: 1 }) }
      );

      // Ensure any eventual consistency
      await delay(100);

      const version = await client.getSchemaVersion(schemaName);

      expect(version.registeredAt).toBeDefined();
      expect(version.registeredAt).toBeInstanceOf(Date);
    });
  });

  describe("should handle errors", () => {
    test("error when getting non-existent version", async () => {
      const schemaName = generateSchemaName();

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ v: 1 }) }
      );

      // Ensure any eventual consistency
      await delay(100);

      await expect(
        client.getSchemaVersion(schemaName, { versionNumber: 999 })
      ).rejects.toThrow();
    });

    test("error when getting version from non-existent schema", async () => {
      const nonExistentName = `non-existent-${Date.now()}`;

      await expect(client.getSchemaVersion(nonExistentName)).rejects.toThrow();
    });
  });
});
