/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("listRegisteredSchemas", () => {
  const node = createTestNode();
  let client!: KurrentDBClient;

  const testPrefix = `registered-test-${Date.now()}`;
  const generateSchemaName = (suffix: string) => `${testPrefix}-${suffix}`;

  let versionId1: string;
  let versionId2: string;

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());

    // Create test schemas with versions for filtering tests
    const result1 = await client.createSchema(
      generateSchemaName("alpha"),
      {
        dataFormat: "json",
        compatibility: "backward",
        tags: { category: "a", env: "test" },
      },
      { schemaDefinition: JSON.stringify({ schema: "alpha" }) }
    );
    versionId1 = result1.schemaVersionId!;

    const result2 = await client.createSchema(
      generateSchemaName("beta"),
      {
        dataFormat: "protobuf",
        compatibility: "full",
        tags: { category: "b", env: "test" },
      },
      { schemaDefinition: JSON.stringify({ schema: "beta" }) }
    );
    versionId2 = result2.schemaVersionId!;

    // Create schema without version (should not appear in registered schemas)
    await client.createSchema(generateSchemaName("gamma"), {
      dataFormat: "json",
      compatibility: "none",
      tags: { category: "c", env: "prod" },
    });
  });

  afterAll(async () => {
    await node.down();
  });

  describe("should list registered schemas", () => {
    test("list all registered schemas with latest versions", async () => {
      const schemas = await client.listRegisteredSchemas({
        schemaNamePrefix: testPrefix,
      });

      expect(Array.isArray(schemas)).toBe(true);
      // Only schemas with versions should be returned
      expect(schemas.length).toBe(2);

      const schemaNames = schemas.map((s) => s.schemaName);
      expect(schemaNames).toContain(generateSchemaName("alpha"));
      expect(schemaNames).toContain(generateSchemaName("beta"));
      // gamma has no version, should not be included
      expect(schemaNames).not.toContain(generateSchemaName("gamma"));
    });

    test("filter by version ID", async () => {
      const schemas = await client.listRegisteredSchemas({
        schemaVersionId: versionId1,
      });

      expect(schemas.length).toBe(1);
      expect(schemas[0].schemaName).toBe(generateSchemaName("alpha"));
      expect(schemas[0].schemaVersionId).toBe(versionId1);
    });

    test("filter by name prefix", async () => {
      const schemas = await client.listRegisteredSchemas({
        schemaNamePrefix: `${testPrefix}-alpha`,
      });

      expect(schemas.length).toBe(1);
      expect(schemas[0].schemaName).toBe(generateSchemaName("alpha"));
    });

    test("filter by tags", async () => {
      const schemas = await client.listRegisteredSchemas({
        schemaNamePrefix: testPrefix,
        schemaTags: { category: "b" },
      });

      expect(schemas.length).toBe(1);
      expect(schemas[0].schemaName).toBe(generateSchemaName("beta"));
    });

    test("without definitions (default)", async () => {
      const schemas = await client.listRegisteredSchemas({
        schemaNamePrefix: testPrefix,
        includeDefinition: false,
      });

      schemas.forEach((schema) => {
        expect(schema.schemaDefinition).toBeUndefined();
      });
    });

    test("with definitions", async () => {
      const schemas = await client.listRegisteredSchemas({
        schemaNamePrefix: testPrefix,
        includeDefinition: true,
      });

      schemas.forEach((schema) => {
        expect(schema.schemaDefinition).toBeDefined();
        expect(schema.schemaDefinition!.length).toBeGreaterThan(0);
      });
    });

    test("registered schema has correct metadata", async () => {
      const schemas = await client.listRegisteredSchemas({
        schemaVersionId: versionId1,
      });

      expect(schemas.length).toBe(1);
      const schema = schemas[0];

      expect(schema.schemaName).toBe(generateSchemaName("alpha"));
      expect(schema.schemaVersionId).toBe(versionId1);
      expect(schema.versionNumber).toBe(1);
      expect(schema.dataFormat).toBe("json");
      expect(schema.compatibility).toBe("backward");
      expect(schema.tags).toEqual({ category: "a", env: "test" });
      expect(schema.registeredAt).toBeDefined();
    });
  });

  describe("edge cases", () => {
    test("returns empty array for non-matching filters", async () => {
      const schemas = await client.listRegisteredSchemas({
        schemaNamePrefix: "non-existent-prefix-xyz",
      });

      expect(Array.isArray(schemas)).toBe(true);
      expect(schemas.length).toBe(0);
    });
  });
});
