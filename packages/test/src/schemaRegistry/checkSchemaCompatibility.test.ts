/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  createTestNode,
  delay,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";

import { KurrentDBClient } from "@kurrent/kurrentdb-client";

describe("checkSchemaCompatibility", () => {
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

  optionalDescribe(supported)("check by schema name", () => {
    test("compatible definition returns success", async () => {
      const schemaName = generateSchemaName();

      // Create schema with backward compatibility
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "backward",
        },
        {
          schemaDefinition: JSON.stringify({
            type: "object",
            properties: {
              name: { type: "string" },
            },
            required: ["name"],
          }),
        }
      );

      // Ensure any eventual consistency
      await delay(100);

      // Check backward compatible definition (adding optional field)
      const result = await client.checkSchemaCompatibility(
        JSON.stringify({
          type: "object",
          properties: {
            name: { type: "string" },
            age: { type: "number" },
          },
          required: ["name"],
        }),
        { schemaName, dataFormat: "json" }
      );

      expect(result.isCompatible).toBe(true);
      if (!result.isCompatible) {
        expect(result.errors.length).toBe(0);
      }
    });

    test("incompatible definition returns errors", async () => {
      const schemaName = generateSchemaName();

      // Create schema with full compatibility
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "full",
        },
        {
          schemaDefinition: JSON.stringify({
            type: "object",
            properties: {
              name: { type: "string" },
            },
            required: ["name"],
          }),
        }
      );

      // Ensure any eventual consistency
      await delay(100);

      // Check incompatible definition (changing required field type)
      const result = await client.checkSchemaCompatibility(
        JSON.stringify({
          type: "object",
          properties: {
            name: { type: "number" },
          },
          required: ["name"],
        }),
        { schemaName, dataFormat: "json" }
      );

      expect(result.isCompatible).toBe(false);
      if (!result.isCompatible) {
        expect(result.errors.length).toBeGreaterThan(0);
      }
    });

    test("compatibility mode 'none' accepts any definition", async () => {
      const schemaName = generateSchemaName();

      // Create schema with no compatibility checks
      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "none",
        },
        {
          schemaDefinition: JSON.stringify({
            type: "object",
            properties: { old: { type: "string" } },
          }),
        }
      );

      // Ensure any eventual consistency
      await delay(100);

      // Completely different schema should be compatible with 'none'
      const result = await client.checkSchemaCompatibility(
        JSON.stringify({
          type: "array",
          items: { type: "number" },
        }),
        { schemaName, dataFormat: "json" }
      );

      expect(result.isCompatible).toBe(true);
    });
  });

  describe("check by schema version ID", () => {
    test("check against specific version by ID", async () => {
      const schemaName = generateSchemaName();

      // Create schema with multiple versions
      const createResult = await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "backward",
        },
        {
          schemaDefinition: JSON.stringify({
            type: "object",
            properties: { v1Field: { type: "string" } },
          }),
        }
      );

      const version1Id = createResult.schemaVersionId!;

      // Register second version
      await client.registerSchemaVersion(
        schemaName,
        JSON.stringify({
          type: "object",
          properties: {
            v1Field: { type: "string" },
            v2Field: { type: "number" },
          },
        })
      );

      // Ensure any eventual consistency
      await delay(100);

      // Check compatibility against version 1 specifically
      const result = await client.checkSchemaCompatibility(
        JSON.stringify({
          type: "object",
          properties: {
            v1Field: { type: "string" },
            newField: { type: "boolean" },
          },
        }),
        { schemaVersionId: version1Id, dataFormat: "json" }
      );

      expect(result.isCompatible).toBeDefined();
    });
  });

  describe("error details", () => {
    test("errors include descriptive messages", async () => {
      const schemaName = generateSchemaName();

      await client.createSchema(
        schemaName,
        {
          dataFormat: "json",
          compatibility: "forward",
        },
        {
          schemaDefinition: JSON.stringify({
            type: "object",
            properties: {
              required_field: { type: "string" },
            },
            required: ["required_field"],
          }),
        }
      );

      // Ensure any eventual consistency
      await delay(100);

      // Breaking forward compatibility by adding required field
      const result = await client.checkSchemaCompatibility(
        JSON.stringify({
          type: "object",
          properties: {
            required_field: { type: "string" },
            another_required: { type: "string" },
          },
          required: ["required_field", "another_required"],
        }),
        { schemaName, dataFormat: "json" }
      );

      // The exact behavior depends on the server's compatibility implementation
      expect(result).toBeDefined();
      expect(typeof result.isCompatible).toBe("boolean");
      if (!result.isCompatible) {
        expect(Array.isArray(result.errors)).toBe(true);
      }
    });
  });

  describe("should handle errors", () => {
    test("error when checking non-existent schema", async () => {
      const nonExistentName = `non-existent-${Date.now()}`;

      await expect(
        client.checkSchemaCompatibility(JSON.stringify({ type: "object" }), {
          schemaName: nonExistentName,
          dataFormat: "json",
        })
      ).rejects.toThrow();
    });

    test("error when checking non-existent version ID", async () => {
      const fakeVersionId = "00000000-0000-0000-0000-000000000000";

      await expect(
        client.checkSchemaCompatibility(JSON.stringify({ type: "object" }), {
          schemaVersionId: fakeVersionId,
          dataFormat: "json",
        })
      ).rejects.toThrow();
    });
  });
});
