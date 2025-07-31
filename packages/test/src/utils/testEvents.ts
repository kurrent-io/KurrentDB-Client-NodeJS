import { EventData, jsonEvent, binaryEvent } from "@kurrent/kurrentdb-client";

export interface TestEventData {
  message: "test";
  index: number;
}

export const jsonTestEvents = (
  count = 4,
  type = "test",
  metadata?: Record<string, unknown>
): EventData[] =>
  Array.from({ length: count }, (_, i) =>
    jsonEvent({
      type,
      data: {
        message: "test",
        index: i,
      },
      ...(metadata && { metadata }),
    })
  );

export const binaryTestEvents = (count = 4, type = "test"): EventData[] =>
  Array.from({ length: count }, (_, i) =>
    binaryEvent({
      type,
      data: Buffer.from(`hello: ${i}`),
    })
  );
