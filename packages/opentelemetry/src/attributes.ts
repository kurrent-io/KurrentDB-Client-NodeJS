const kurrentdb = "db.kurrentdb";
const db = "db";
const server = "server";
const streams = "streams";

export const KurrentAttributes = {
  DATABASE_USER: `${db}.user`,
  DATABASE_SYSTEM: `${db}.system`,
  DATABASE_OPERATION: `${db}.operation`,

  SERVER_ADDRESS: `${server}.address`,
  SERVER_PORT: `${server}.port`,

  STREAM_APPEND: `${streams}.append`,
  STREAM_MULTI_APPEND: `${streams}.multi_append`,
  STREAM_SUBSCRIBE: `${streams}.subscribe`,

  KURRENT_DB_STREAM: `${kurrentdb}.stream`,
  KURRENT_DB_SUBSCRIPTION_ID: `${kurrentdb}.subscription.id`,
  KURRENT_DB_EVENT_ID: `${kurrentdb}.event.id`,
  KURRENT_DB_EVENT_TYPE: `${kurrentdb}.event.type`,
};
