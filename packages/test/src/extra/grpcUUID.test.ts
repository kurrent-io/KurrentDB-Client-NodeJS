import {
  parseUUID,
  structuredUUIDToString,
} from "@kurrent/kurrentdb-client/dist/utils/grpcUUID";
import { UUID } from "@kurrent/kurrentdb-client/generated/kurrentdb/protocols/v1/shared_pb";

const makeStructured = (msb: string, lsb: string): UUID.Structured => {
  const s = new UUID.Structured();
  s.setMostSignificantBits(msb);
  s.setLeastSignificantBits(lsb);
  return s;
};

describe("grpcUUID", () => {
  describe("structuredUUIDToString", () => {
    test.each([
      ["0", "0", "00000000-0000-0000-0000-000000000000"],
      ["-1", "-1", "ffffffff-ffff-ffff-ffff-ffffffffffff"],
      ["-9223372036854775808", "0", "80000000-0000-0000-0000-000000000000"],
      ["0", "-9223372036854775808", "00000000-0000-0000-8000-000000000000"],
      [
        "81985529216486895",
        "81985529216486895",
        "01234567-89ab-cdef-0123-456789abcdef",
      ],
    ])("msb=%s lsb=%s -> %s", (msb, lsb, expected) => {
      expect(structuredUUIDToString(makeStructured(msb, lsb))).toBe(expected);
    });
  });

  describe("parseUUID", () => {
    test("returns undefined when given undefined", () => {
      expect(parseUUID(undefined)).toBeUndefined();
    });

    test("returns the string form unchanged", () => {
      const u = new UUID();
      u.setString("01234567-89ab-cdef-0123-456789abcdef");
      expect(parseUUID(u)).toBe("01234567-89ab-cdef-0123-456789abcdef");
    });

    test("decodes structured form with high bit set", () => {
      const u = new UUID();
      u.setStructured(makeStructured("-1", "-1"));
      expect(parseUUID(u)).toBe("ffffffff-ffff-ffff-ffff-ffffffffffff");
    });
  });
});
