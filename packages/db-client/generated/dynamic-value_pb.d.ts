// package: kurrentdb.protobuf
// file: dynamic-value.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class DynamicValue extends jspb.Message { 

    hasNullValue(): boolean;
    clearNullValue(): void;
    getNullValue(): google_protobuf_struct_pb.NullValue;
    setNullValue(value: google_protobuf_struct_pb.NullValue): DynamicValue;

    hasInt32Value(): boolean;
    clearInt32Value(): void;
    getInt32Value(): number;
    setInt32Value(value: number): DynamicValue;

    hasInt64Value(): boolean;
    clearInt64Value(): void;
    getInt64Value(): number;
    setInt64Value(value: number): DynamicValue;

    hasBytesValue(): boolean;
    clearBytesValue(): void;
    getBytesValue(): Uint8Array | string;
    getBytesValue_asU8(): Uint8Array;
    getBytesValue_asB64(): string;
    setBytesValue(value: Uint8Array | string): DynamicValue;

    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): number;
    setDoubleValue(value: number): DynamicValue;

    hasFloatValue(): boolean;
    clearFloatValue(): void;
    getFloatValue(): number;
    setFloatValue(value: number): DynamicValue;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): string;
    setStringValue(value: string): DynamicValue;

    hasBooleanValue(): boolean;
    clearBooleanValue(): void;
    getBooleanValue(): boolean;
    setBooleanValue(value: boolean): DynamicValue;

    hasTimestampValue(): boolean;
    clearTimestampValue(): void;
    getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): DynamicValue;

    hasDurationValue(): boolean;
    clearDurationValue(): void;
    getDurationValue(): google_protobuf_duration_pb.Duration | undefined;
    setDurationValue(value?: google_protobuf_duration_pb.Duration): DynamicValue;

    getKindCase(): DynamicValue.KindCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicValue.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicValue): DynamicValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicValue;
    static deserializeBinaryFromReader(message: DynamicValue, reader: jspb.BinaryReader): DynamicValue;
}

export namespace DynamicValue {
    export type AsObject = {
        nullValue: google_protobuf_struct_pb.NullValue,
        int32Value: number,
        int64Value: number,
        bytesValue: Uint8Array | string,
        doubleValue: number,
        floatValue: number,
        stringValue: string,
        booleanValue: boolean,
        timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationValue?: google_protobuf_duration_pb.Duration.AsObject,
    }

    export enum KindCase {
        KIND_NOT_SET = 0,
        NULL_VALUE = 1,
        INT32_VALUE = 2,
        INT64_VALUE = 3,
        BYTES_VALUE = 4,
        DOUBLE_VALUE = 5,
        FLOAT_VALUE = 6,
        STRING_VALUE = 7,
        BOOLEAN_VALUE = 8,
        TIMESTAMP_VALUE = 9,
        DURATION_VALUE = 10,
    }

}
