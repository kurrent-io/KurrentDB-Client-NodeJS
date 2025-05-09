// source: registry/shared.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.kurrentdb.protocol.registry.v2.CompatibilityMode', null, global);
goog.exportSymbol('proto.kurrentdb.protocol.registry.v2.SchemaDataFormat', null, global);
/**
 * @enum {number}
 */
proto.kurrentdb.protocol.registry.v2.SchemaDataFormat = {
  SCHEMA_DATA_FORMAT_UNSPECIFIED: 0,
  SCHEMA_DATA_FORMAT_JSON: 1,
  SCHEMA_DATA_FORMAT_PROTOBUF: 2,
  SCHEMA_DATA_FORMAT_AVRO: 3,
  SCHEMA_DATA_FORMAT_BYTES: 4
};

/**
 * @enum {number}
 */
proto.kurrentdb.protocol.registry.v2.CompatibilityMode = {
  COMPATIBILITY_MODE_UNSPECIFIED: 0,
  COMPATIBILITY_MODE_BACKWARD: 1,
  COMPATIBILITY_MODE_FORWARD: 2,
  COMPATIBILITY_MODE_FULL: 3,
  COMPATIBILITY_MODE_NONE: 4
};

goog.object.extend(exports, proto.kurrentdb.protocol.registry.v2);
