/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  createTestNode,
  delay,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("getSchemaVersionById", () => {
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

  optionalDescribe(supported)("should retrieve version by ID", () => {
    test("get version by unique ID", async () => {
      const schemaName = generateSchemaName();
      const definition = JSON.stringify({ type: "object" });

      // Create schema with initial version
      const createResult = await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: definition }
      );

      const versionId = createResult.schemaVersionId!;

      // Ensure any eventual consistency
      await delay(100);

      // Retrieve by ID
      const version = await client.getSchemaVersionById(versionId);

      expect(version.schemaVersionId).toBe(versionId);
      expect(version.versionNumber).toBe(1);
      expect(version.dataFormat).toBe("json");
    });

    test("schema definition is included", async () => {
      const schemaName = generateSchemaName();
      const definitionObj = { name: "test", value: 42 };
      const definition = JSON.stringify(definitionObj);

      const createResult = await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: definition }
      );

      // Ensure any eventual consistency
      await delay(100);

      const version = await client.getSchemaVersionById(
        createResult.schemaVersionId!
      );

      expect(version.schemaDefinition).toBeDefined();
      expect(version.schemaDefinition).toBeInstanceOf(Uint8Array);

      const decoded = new TextDecoder().decode(version.schemaDefinition);
      expect(JSON.parse(decoded)).toEqual(definitionObj);
    });

    test("retrieve different versions by their IDs", async () => {
      const schemaName = generateSchemaName();

      const result1 = await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        { schemaDefinition: JSON.stringify({ version: 1 }) }
      );

      const result2 = await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({ version: 2 })
      );

      // Ensure any eventual consistency
      await delay(100);

      // Retrieve both versions by ID
      const v1 = await client.getSchemaVersionById(result1.schemaVersionId!);
      const v2 = await client.getSchemaVersionById(result2.schemaVersionId);

      expect(v1.versionNumber).toBe(1);
      expect(v2.versionNumber).toBe(2);
      expect(v1.schemaVersionId).not.toBe(v2.schemaVersionId);
    });
  });

  optionalDescribe(supported)("should handle errors", () => {
    test("error when getting non-existent ID", async () => {
      const fakeVersionId = "00000000-0000-0000-0000-000000000000";

      await expect(
        client.getSchemaVersionById(fakeVersionId)
      ).rejects.toThrow();
    });
  });
});
