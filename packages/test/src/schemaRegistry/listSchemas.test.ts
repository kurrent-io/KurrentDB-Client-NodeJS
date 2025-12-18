/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode } from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("listSchemas", () => {
  const node = createTestNode();
  let client!: KurrentDBClient;

  const testPrefix = `list-test-${Date.now()}`;
  const generateSchemaName = (suffix: string) => `${testPrefix}-${suffix}`;

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());

    // Create test schemas for filtering tests
    await client.createSchema(generateSchemaName("alpha"), {
      dataFormat: "json",
      compatibility: "none",
      tags: { category: "a", env: "test" },
    });

    await client.createSchema(generateSchemaName("beta"), {
      dataFormat: "json",
      compatibility: "backward",
      tags: { category: "b", env: "test" },
    });

    await client.createSchema(generateSchemaName("gamma"), {
      dataFormat: "protobuf",
      compatibility: "full",
      tags: { category: "a", env: "prod" },
    });
  });

  afterAll(async () => {
    await node.down();
  });

  describe("should list schemas", () => {
    test("list all schemas", async () => {
      const schemas = await client.listSchemas();

      expect(Array.isArray(schemas)).toBe(true);
      expect(schemas.length).toBeGreaterThanOrEqual(3);

      // Verify our test schemas are in the list
      const schemaNames = schemas.map((s) => s.schemaName);
      expect(schemaNames).toContain(generateSchemaName("alpha"));
      expect(schemaNames).toContain(generateSchemaName("beta"));
      expect(schemaNames).toContain(generateSchemaName("gamma"));
    });

    test("filter by name prefix", async () => {
      const schemas = await client.listSchemas({
        schemaNamePrefix: testPrefix,
      });

      expect(schemas.length).toBe(3);
      schemas.forEach((schema) => {
        expect(schema.schemaName.startsWith(testPrefix)).toBe(true);
      });
    });

    test("filter by tags", async () => {
      const schemas = await client.listSchemas({
        schemaNamePrefix: testPrefix,
        schemaTags: { category: "a" },
      });

      expect(schemas.length).toBe(2);
      const schemaNames = schemas.map((s) => s.schemaName);
      expect(schemaNames).toContain(generateSchemaName("alpha"));
      expect(schemaNames).toContain(generateSchemaName("gamma"));
    });

    test("combine prefix and tag filters", async () => {
      const schemas = await client.listSchemas({
        schemaNamePrefix: testPrefix,
        schemaTags: { category: "a", env: "test" },
      });

      expect(schemas.length).toBe(1);
      expect(schemas[0].schemaName).toBe(generateSchemaName("alpha"));
    });

    test("returns empty array for non-matching filters", async () => {
      const schemas = await client.listSchemas({
        schemaNamePrefix: "non-existent-prefix-xyz",
      });

      expect(Array.isArray(schemas)).toBe(true);
      expect(schemas.length).toBe(0);
    });
  });
});
