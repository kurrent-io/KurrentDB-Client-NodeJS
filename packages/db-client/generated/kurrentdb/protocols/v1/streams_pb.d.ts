// package: event_store.client.streams
// file: kurrentdb/protocols/v1/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as kurrentdb_protocols_v1_shared_pb from "../../../kurrentdb/protocols/v1/shared_pb";
import * as kurrentdb_protocols_v1_status_pb from "../../../kurrentdb/protocols/v1/status_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ReadReq extends jspb.Message { 

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): ReadReq.Options | undefined;
    setOptions(value?: ReadReq.Options): ReadReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadReq.AsObject;
    static toObject(includeInstance: boolean, msg: ReadReq): ReadReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadReq;
    static deserializeBinaryFromReader(message: ReadReq, reader: jspb.BinaryReader): ReadReq;
}

export namespace ReadReq {
    export type AsObject = {
        options?: ReadReq.Options.AsObject,
    }


    export class Options extends jspb.Message { 

        hasStream(): boolean;
        clearStream(): void;
        getStream(): ReadReq.Options.StreamOptions | undefined;
        setStream(value?: ReadReq.Options.StreamOptions): Options;

        hasAll(): boolean;
        clearAll(): void;
        getAll(): ReadReq.Options.AllOptions | undefined;
        setAll(value?: ReadReq.Options.AllOptions): Options;
        getReadDirection(): ReadReq.Options.ReadDirection;
        setReadDirection(value: ReadReq.Options.ReadDirection): Options;
        getResolveLinks(): boolean;
        setResolveLinks(value: boolean): Options;

        hasCount(): boolean;
        clearCount(): void;
        getCount(): string;
        setCount(value: string): Options;

        hasSubscription(): boolean;
        clearSubscription(): void;
        getSubscription(): ReadReq.Options.SubscriptionOptions | undefined;
        setSubscription(value?: ReadReq.Options.SubscriptionOptions): Options;

        hasFilter(): boolean;
        clearFilter(): void;
        getFilter(): ReadReq.Options.FilterOptions | undefined;
        setFilter(value?: ReadReq.Options.FilterOptions): Options;

        hasNoFilter(): boolean;
        clearNoFilter(): void;
        getNoFilter(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setNoFilter(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        hasUuidOption(): boolean;
        clearUuidOption(): void;
        getUuidOption(): ReadReq.Options.UUIDOption | undefined;
        setUuidOption(value?: ReadReq.Options.UUIDOption): Options;

        hasControlOption(): boolean;
        clearControlOption(): void;
        getControlOption(): ReadReq.Options.ControlOption | undefined;
        setControlOption(value?: ReadReq.Options.ControlOption): Options;

        getStreamOptionCase(): Options.StreamOptionCase;
        getCountOptionCase(): Options.CountOptionCase;
        getFilterOptionCase(): Options.FilterOptionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            stream?: ReadReq.Options.StreamOptions.AsObject,
            all?: ReadReq.Options.AllOptions.AsObject,
            readDirection: ReadReq.Options.ReadDirection,
            resolveLinks: boolean,
            count: string,
            subscription?: ReadReq.Options.SubscriptionOptions.AsObject,
            filter?: ReadReq.Options.FilterOptions.AsObject,
            noFilter?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            uuidOption?: ReadReq.Options.UUIDOption.AsObject,
            controlOption?: ReadReq.Options.ControlOption.AsObject,
        }


        export class StreamOptions extends jspb.Message { 

            hasStreamIdentifier(): boolean;
            clearStreamIdentifier(): void;
            getStreamIdentifier(): kurrentdb_protocols_v1_shared_pb.StreamIdentifier | undefined;
            setStreamIdentifier(value?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier): StreamOptions;

            hasRevision(): boolean;
            clearRevision(): void;
            getRevision(): string;
            setRevision(value: string): StreamOptions;

            hasStart(): boolean;
            clearStart(): void;
            getStart(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
            setStart(value?: kurrentdb_protocols_v1_shared_pb.Empty): StreamOptions;

            hasEnd(): boolean;
            clearEnd(): void;
            getEnd(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
            setEnd(value?: kurrentdb_protocols_v1_shared_pb.Empty): StreamOptions;

            getRevisionOptionCase(): StreamOptions.RevisionOptionCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): StreamOptions.AsObject;
            static toObject(includeInstance: boolean, msg: StreamOptions): StreamOptions.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: StreamOptions, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): StreamOptions;
            static deserializeBinaryFromReader(message: StreamOptions, reader: jspb.BinaryReader): StreamOptions;
        }

        export namespace StreamOptions {
            export type AsObject = {
                streamIdentifier?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier.AsObject,
                revision: string,
                start?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
                end?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            }

            export enum RevisionOptionCase {
                REVISION_OPTION_NOT_SET = 0,
                REVISION = 2,
                START = 3,
                END = 4,
            }

        }

        export class AllOptions extends jspb.Message { 

            hasPosition(): boolean;
            clearPosition(): void;
            getPosition(): ReadReq.Options.Position | undefined;
            setPosition(value?: ReadReq.Options.Position): AllOptions;

            hasStart(): boolean;
            clearStart(): void;
            getStart(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
            setStart(value?: kurrentdb_protocols_v1_shared_pb.Empty): AllOptions;

            hasEnd(): boolean;
            clearEnd(): void;
            getEnd(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
            setEnd(value?: kurrentdb_protocols_v1_shared_pb.Empty): AllOptions;

            getAllOptionCase(): AllOptions.AllOptionCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AllOptions.AsObject;
            static toObject(includeInstance: boolean, msg: AllOptions): AllOptions.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AllOptions, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AllOptions;
            static deserializeBinaryFromReader(message: AllOptions, reader: jspb.BinaryReader): AllOptions;
        }

        export namespace AllOptions {
            export type AsObject = {
                position?: ReadReq.Options.Position.AsObject,
                start?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
                end?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            }

            export enum AllOptionCase {
                ALL_OPTION_NOT_SET = 0,
                POSITION = 1,
                START = 2,
                END = 3,
            }

        }

        export class SubscriptionOptions extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SubscriptionOptions.AsObject;
            static toObject(includeInstance: boolean, msg: SubscriptionOptions): SubscriptionOptions.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SubscriptionOptions, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SubscriptionOptions;
            static deserializeBinaryFromReader(message: SubscriptionOptions, reader: jspb.BinaryReader): SubscriptionOptions;
        }

        export namespace SubscriptionOptions {
            export type AsObject = {
            }
        }

        export class Position extends jspb.Message { 
            getCommitPosition(): string;
            setCommitPosition(value: string): Position;
            getPreparePosition(): string;
            setPreparePosition(value: string): Position;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Position.AsObject;
            static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Position;
            static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
        }

        export namespace Position {
            export type AsObject = {
                commitPosition: string,
                preparePosition: string,
            }
        }

        export class FilterOptions extends jspb.Message { 

            hasStreamIdentifier(): boolean;
            clearStreamIdentifier(): void;
            getStreamIdentifier(): ReadReq.Options.FilterOptions.Expression | undefined;
            setStreamIdentifier(value?: ReadReq.Options.FilterOptions.Expression): FilterOptions;

            hasEventType(): boolean;
            clearEventType(): void;
            getEventType(): ReadReq.Options.FilterOptions.Expression | undefined;
            setEventType(value?: ReadReq.Options.FilterOptions.Expression): FilterOptions;

            hasMax(): boolean;
            clearMax(): void;
            getMax(): number;
            setMax(value: number): FilterOptions;

            hasCount(): boolean;
            clearCount(): void;
            getCount(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
            setCount(value?: kurrentdb_protocols_v1_shared_pb.Empty): FilterOptions;
            getCheckpointintervalmultiplier(): number;
            setCheckpointintervalmultiplier(value: number): FilterOptions;

            getFilterCase(): FilterOptions.FilterCase;
            getWindowCase(): FilterOptions.WindowCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): FilterOptions.AsObject;
            static toObject(includeInstance: boolean, msg: FilterOptions): FilterOptions.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: FilterOptions, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): FilterOptions;
            static deserializeBinaryFromReader(message: FilterOptions, reader: jspb.BinaryReader): FilterOptions;
        }

        export namespace FilterOptions {
            export type AsObject = {
                streamIdentifier?: ReadReq.Options.FilterOptions.Expression.AsObject,
                eventType?: ReadReq.Options.FilterOptions.Expression.AsObject,
                max: number,
                count?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
                checkpointintervalmultiplier: number,
            }


            export class Expression extends jspb.Message { 
                getRegex(): string;
                setRegex(value: string): Expression;
                clearPrefixList(): void;
                getPrefixList(): Array<string>;
                setPrefixList(value: Array<string>): Expression;
                addPrefix(value: string, index?: number): string;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Expression.AsObject;
                static toObject(includeInstance: boolean, msg: Expression): Expression.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Expression, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Expression;
                static deserializeBinaryFromReader(message: Expression, reader: jspb.BinaryReader): Expression;
            }

            export namespace Expression {
                export type AsObject = {
                    regex: string,
                    prefixList: Array<string>,
                }
            }


            export enum FilterCase {
                FILTER_NOT_SET = 0,
                STREAM_IDENTIFIER = 1,
                EVENT_TYPE = 2,
            }

            export enum WindowCase {
                WINDOW_NOT_SET = 0,
                MAX = 3,
                COUNT = 4,
            }

        }

        export class UUIDOption extends jspb.Message { 

            hasStructured(): boolean;
            clearStructured(): void;
            getStructured(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
            setStructured(value?: kurrentdb_protocols_v1_shared_pb.Empty): UUIDOption;

            hasString(): boolean;
            clearString(): void;
            getString(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
            setString(value?: kurrentdb_protocols_v1_shared_pb.Empty): UUIDOption;

            getContentCase(): UUIDOption.ContentCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): UUIDOption.AsObject;
            static toObject(includeInstance: boolean, msg: UUIDOption): UUIDOption.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: UUIDOption, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): UUIDOption;
            static deserializeBinaryFromReader(message: UUIDOption, reader: jspb.BinaryReader): UUIDOption;
        }

        export namespace UUIDOption {
            export type AsObject = {
                structured?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
                string?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            }

            export enum ContentCase {
                CONTENT_NOT_SET = 0,
                STRUCTURED = 1,
                STRING = 2,
            }

        }

        export class ControlOption extends jspb.Message { 
            getCompatibility(): number;
            setCompatibility(value: number): ControlOption;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ControlOption.AsObject;
            static toObject(includeInstance: boolean, msg: ControlOption): ControlOption.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ControlOption, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ControlOption;
            static deserializeBinaryFromReader(message: ControlOption, reader: jspb.BinaryReader): ControlOption;
        }

        export namespace ControlOption {
            export type AsObject = {
                compatibility: number,
            }
        }


        export enum ReadDirection {
    FORWARDS = 0,
    BACKWARDS = 1,
        }


        export enum StreamOptionCase {
            STREAM_OPTION_NOT_SET = 0,
            STREAM = 1,
            ALL = 2,
        }

        export enum CountOptionCase {
            COUNT_OPTION_NOT_SET = 0,
            COUNT = 5,
            SUBSCRIPTION = 6,
        }

        export enum FilterOptionCase {
            FILTER_OPTION_NOT_SET = 0,
            FILTER = 7,
            NO_FILTER = 8,
        }

    }

}

export class ReadResp extends jspb.Message { 

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): ReadResp.ReadEvent | undefined;
    setEvent(value?: ReadResp.ReadEvent): ReadResp;

    hasConfirmation(): boolean;
    clearConfirmation(): void;
    getConfirmation(): ReadResp.SubscriptionConfirmation | undefined;
    setConfirmation(value?: ReadResp.SubscriptionConfirmation): ReadResp;

    hasCheckpoint(): boolean;
    clearCheckpoint(): void;
    getCheckpoint(): ReadResp.Checkpoint | undefined;
    setCheckpoint(value?: ReadResp.Checkpoint): ReadResp;

    hasStreamNotFound(): boolean;
    clearStreamNotFound(): void;
    getStreamNotFound(): ReadResp.StreamNotFound | undefined;
    setStreamNotFound(value?: ReadResp.StreamNotFound): ReadResp;

    hasFirstStreamPosition(): boolean;
    clearFirstStreamPosition(): void;
    getFirstStreamPosition(): string;
    setFirstStreamPosition(value: string): ReadResp;

    hasLastStreamPosition(): boolean;
    clearLastStreamPosition(): void;
    getLastStreamPosition(): string;
    setLastStreamPosition(value: string): ReadResp;

    hasLastAllStreamPosition(): boolean;
    clearLastAllStreamPosition(): void;
    getLastAllStreamPosition(): kurrentdb_protocols_v1_shared_pb.AllStreamPosition | undefined;
    setLastAllStreamPosition(value?: kurrentdb_protocols_v1_shared_pb.AllStreamPosition): ReadResp;

    hasCaughtUp(): boolean;
    clearCaughtUp(): void;
    getCaughtUp(): ReadResp.CaughtUp | undefined;
    setCaughtUp(value?: ReadResp.CaughtUp): ReadResp;

    hasFellBehind(): boolean;
    clearFellBehind(): void;
    getFellBehind(): ReadResp.FellBehind | undefined;
    setFellBehind(value?: ReadResp.FellBehind): ReadResp;

    getContentCase(): ReadResp.ContentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadResp.AsObject;
    static toObject(includeInstance: boolean, msg: ReadResp): ReadResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadResp;
    static deserializeBinaryFromReader(message: ReadResp, reader: jspb.BinaryReader): ReadResp;
}

export namespace ReadResp {
    export type AsObject = {
        event?: ReadResp.ReadEvent.AsObject,
        confirmation?: ReadResp.SubscriptionConfirmation.AsObject,
        checkpoint?: ReadResp.Checkpoint.AsObject,
        streamNotFound?: ReadResp.StreamNotFound.AsObject,
        firstStreamPosition: string,
        lastStreamPosition: string,
        lastAllStreamPosition?: kurrentdb_protocols_v1_shared_pb.AllStreamPosition.AsObject,
        caughtUp?: ReadResp.CaughtUp.AsObject,
        fellBehind?: ReadResp.FellBehind.AsObject,
    }


    export class CaughtUp extends jspb.Message { 

        hasTimestamp(): boolean;
        clearTimestamp(): void;
        getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): CaughtUp;

        hasStreamRevision(): boolean;
        clearStreamRevision(): void;
        getStreamRevision(): string | undefined;
        setStreamRevision(value: string): CaughtUp;

        hasPosition(): boolean;
        clearPosition(): void;
        getPosition(): ReadResp.Position | undefined;
        setPosition(value?: ReadResp.Position): CaughtUp;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CaughtUp.AsObject;
        static toObject(includeInstance: boolean, msg: CaughtUp): CaughtUp.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CaughtUp, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CaughtUp;
        static deserializeBinaryFromReader(message: CaughtUp, reader: jspb.BinaryReader): CaughtUp;
    }

    export namespace CaughtUp {
        export type AsObject = {
            timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            streamRevision?: string,
            position?: ReadResp.Position.AsObject,
        }
    }

    export class FellBehind extends jspb.Message { 

        hasTimestamp(): boolean;
        clearTimestamp(): void;
        getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): FellBehind;

        hasStreamRevision(): boolean;
        clearStreamRevision(): void;
        getStreamRevision(): string | undefined;
        setStreamRevision(value: string): FellBehind;

        hasPosition(): boolean;
        clearPosition(): void;
        getPosition(): ReadResp.Position | undefined;
        setPosition(value?: ReadResp.Position): FellBehind;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FellBehind.AsObject;
        static toObject(includeInstance: boolean, msg: FellBehind): FellBehind.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FellBehind, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FellBehind;
        static deserializeBinaryFromReader(message: FellBehind, reader: jspb.BinaryReader): FellBehind;
    }

    export namespace FellBehind {
        export type AsObject = {
            timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            streamRevision?: string,
            position?: ReadResp.Position.AsObject,
        }
    }

    export class ReadEvent extends jspb.Message { 

        hasEvent(): boolean;
        clearEvent(): void;
        getEvent(): ReadResp.ReadEvent.RecordedEvent | undefined;
        setEvent(value?: ReadResp.ReadEvent.RecordedEvent): ReadEvent;

        hasLink(): boolean;
        clearLink(): void;
        getLink(): ReadResp.ReadEvent.RecordedEvent | undefined;
        setLink(value?: ReadResp.ReadEvent.RecordedEvent): ReadEvent;

        hasCommitPosition(): boolean;
        clearCommitPosition(): void;
        getCommitPosition(): string;
        setCommitPosition(value: string): ReadEvent;

        hasNoPosition(): boolean;
        clearNoPosition(): void;
        getNoPosition(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setNoPosition(value?: kurrentdb_protocols_v1_shared_pb.Empty): ReadEvent;

        getPositionCase(): ReadEvent.PositionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReadEvent.AsObject;
        static toObject(includeInstance: boolean, msg: ReadEvent): ReadEvent.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ReadEvent, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReadEvent;
        static deserializeBinaryFromReader(message: ReadEvent, reader: jspb.BinaryReader): ReadEvent;
    }

    export namespace ReadEvent {
        export type AsObject = {
            event?: ReadResp.ReadEvent.RecordedEvent.AsObject,
            link?: ReadResp.ReadEvent.RecordedEvent.AsObject,
            commitPosition: string,
            noPosition?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
        }


        export class RecordedEvent extends jspb.Message { 

            hasId(): boolean;
            clearId(): void;
            getId(): kurrentdb_protocols_v1_shared_pb.UUID | undefined;
            setId(value?: kurrentdb_protocols_v1_shared_pb.UUID): RecordedEvent;

            hasStreamIdentifier(): boolean;
            clearStreamIdentifier(): void;
            getStreamIdentifier(): kurrentdb_protocols_v1_shared_pb.StreamIdentifier | undefined;
            setStreamIdentifier(value?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier): RecordedEvent;
            getStreamRevision(): string;
            setStreamRevision(value: string): RecordedEvent;
            getPreparePosition(): string;
            setPreparePosition(value: string): RecordedEvent;
            getCommitPosition(): string;
            setCommitPosition(value: string): RecordedEvent;

            getMetadataMap(): jspb.Map<string, string>;
            clearMetadataMap(): void;
            getCustomMetadata(): Uint8Array | string;
            getCustomMetadata_asU8(): Uint8Array;
            getCustomMetadata_asB64(): string;
            setCustomMetadata(value: Uint8Array | string): RecordedEvent;
            getData(): Uint8Array | string;
            getData_asU8(): Uint8Array;
            getData_asB64(): string;
            setData(value: Uint8Array | string): RecordedEvent;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RecordedEvent.AsObject;
            static toObject(includeInstance: boolean, msg: RecordedEvent): RecordedEvent.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RecordedEvent, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RecordedEvent;
            static deserializeBinaryFromReader(message: RecordedEvent, reader: jspb.BinaryReader): RecordedEvent;
        }

        export namespace RecordedEvent {
            export type AsObject = {
                id?: kurrentdb_protocols_v1_shared_pb.UUID.AsObject,
                streamIdentifier?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier.AsObject,
                streamRevision: string,
                preparePosition: string,
                commitPosition: string,

                metadataMap: Array<[string, string]>,
                customMetadata: Uint8Array | string,
                data: Uint8Array | string,
            }
        }


        export enum PositionCase {
            POSITION_NOT_SET = 0,
            COMMIT_POSITION = 3,
            NO_POSITION = 4,
        }

    }

    export class SubscriptionConfirmation extends jspb.Message { 
        getSubscriptionId(): string;
        setSubscriptionId(value: string): SubscriptionConfirmation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SubscriptionConfirmation.AsObject;
        static toObject(includeInstance: boolean, msg: SubscriptionConfirmation): SubscriptionConfirmation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SubscriptionConfirmation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SubscriptionConfirmation;
        static deserializeBinaryFromReader(message: SubscriptionConfirmation, reader: jspb.BinaryReader): SubscriptionConfirmation;
    }

    export namespace SubscriptionConfirmation {
        export type AsObject = {
            subscriptionId: string,
        }
    }

    export class Checkpoint extends jspb.Message { 
        getCommitPosition(): string;
        setCommitPosition(value: string): Checkpoint;
        getPreparePosition(): string;
        setPreparePosition(value: string): Checkpoint;

        hasTimestamp(): boolean;
        clearTimestamp(): void;
        getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Checkpoint;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Checkpoint.AsObject;
        static toObject(includeInstance: boolean, msg: Checkpoint): Checkpoint.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Checkpoint, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Checkpoint;
        static deserializeBinaryFromReader(message: Checkpoint, reader: jspb.BinaryReader): Checkpoint;
    }

    export namespace Checkpoint {
        export type AsObject = {
            commitPosition: string,
            preparePosition: string,
            timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

    export class Position extends jspb.Message { 
        getCommitPosition(): string;
        setCommitPosition(value: string): Position;
        getPreparePosition(): string;
        setPreparePosition(value: string): Position;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Position.AsObject;
        static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Position;
        static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
    }

    export namespace Position {
        export type AsObject = {
            commitPosition: string,
            preparePosition: string,
        }
    }

    export class StreamNotFound extends jspb.Message { 

        hasStreamIdentifier(): boolean;
        clearStreamIdentifier(): void;
        getStreamIdentifier(): kurrentdb_protocols_v1_shared_pb.StreamIdentifier | undefined;
        setStreamIdentifier(value?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier): StreamNotFound;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StreamNotFound.AsObject;
        static toObject(includeInstance: boolean, msg: StreamNotFound): StreamNotFound.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StreamNotFound, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StreamNotFound;
        static deserializeBinaryFromReader(message: StreamNotFound, reader: jspb.BinaryReader): StreamNotFound;
    }

    export namespace StreamNotFound {
        export type AsObject = {
            streamIdentifier?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier.AsObject,
        }
    }


    export enum ContentCase {
        CONTENT_NOT_SET = 0,
        EVENT = 1,
        CONFIRMATION = 2,
        CHECKPOINT = 3,
        STREAM_NOT_FOUND = 4,
        FIRST_STREAM_POSITION = 5,
        LAST_STREAM_POSITION = 6,
        LAST_ALL_STREAM_POSITION = 7,
        CAUGHT_UP = 8,
        FELL_BEHIND = 9,
    }

}

export class AppendReq extends jspb.Message { 

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): AppendReq.Options | undefined;
    setOptions(value?: AppendReq.Options): AppendReq;

    hasProposedMessage(): boolean;
    clearProposedMessage(): void;
    getProposedMessage(): AppendReq.ProposedMessage | undefined;
    setProposedMessage(value?: AppendReq.ProposedMessage): AppendReq;

    getContentCase(): AppendReq.ContentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendReq.AsObject;
    static toObject(includeInstance: boolean, msg: AppendReq): AppendReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendReq;
    static deserializeBinaryFromReader(message: AppendReq, reader: jspb.BinaryReader): AppendReq;
}

export namespace AppendReq {
    export type AsObject = {
        options?: AppendReq.Options.AsObject,
        proposedMessage?: AppendReq.ProposedMessage.AsObject,
    }


    export class Options extends jspb.Message { 

        hasStreamIdentifier(): boolean;
        clearStreamIdentifier(): void;
        getStreamIdentifier(): kurrentdb_protocols_v1_shared_pb.StreamIdentifier | undefined;
        setStreamIdentifier(value?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier): Options;

        hasRevision(): boolean;
        clearRevision(): void;
        getRevision(): string;
        setRevision(value: string): Options;

        hasNoStream(): boolean;
        clearNoStream(): void;
        getNoStream(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setNoStream(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        hasAny(): boolean;
        clearAny(): void;
        getAny(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setAny(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        hasStreamExists(): boolean;
        clearStreamExists(): void;
        getStreamExists(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setStreamExists(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        getExpectedStreamRevisionCase(): Options.ExpectedStreamRevisionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            streamIdentifier?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier.AsObject,
            revision: string,
            noStream?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            any?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            streamExists?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
        }

        export enum ExpectedStreamRevisionCase {
            EXPECTED_STREAM_REVISION_NOT_SET = 0,
            REVISION = 2,
            NO_STREAM = 3,
            ANY = 4,
            STREAM_EXISTS = 5,
        }

    }

    export class ProposedMessage extends jspb.Message { 

        hasId(): boolean;
        clearId(): void;
        getId(): kurrentdb_protocols_v1_shared_pb.UUID | undefined;
        setId(value?: kurrentdb_protocols_v1_shared_pb.UUID): ProposedMessage;

        getMetadataMap(): jspb.Map<string, string>;
        clearMetadataMap(): void;
        getCustomMetadata(): Uint8Array | string;
        getCustomMetadata_asU8(): Uint8Array;
        getCustomMetadata_asB64(): string;
        setCustomMetadata(value: Uint8Array | string): ProposedMessage;
        getData(): Uint8Array | string;
        getData_asU8(): Uint8Array;
        getData_asB64(): string;
        setData(value: Uint8Array | string): ProposedMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ProposedMessage.AsObject;
        static toObject(includeInstance: boolean, msg: ProposedMessage): ProposedMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ProposedMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ProposedMessage;
        static deserializeBinaryFromReader(message: ProposedMessage, reader: jspb.BinaryReader): ProposedMessage;
    }

    export namespace ProposedMessage {
        export type AsObject = {
            id?: kurrentdb_protocols_v1_shared_pb.UUID.AsObject,

            metadataMap: Array<[string, string]>,
            customMetadata: Uint8Array | string,
            data: Uint8Array | string,
        }
    }


    export enum ContentCase {
        CONTENT_NOT_SET = 0,
        OPTIONS = 1,
        PROPOSED_MESSAGE = 2,
    }

}

export class AppendResp extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): AppendResp.Success | undefined;
    setSuccess(value?: AppendResp.Success): AppendResp;

    hasWrongExpectedVersion(): boolean;
    clearWrongExpectedVersion(): void;
    getWrongExpectedVersion(): AppendResp.WrongExpectedVersion | undefined;
    setWrongExpectedVersion(value?: AppendResp.WrongExpectedVersion): AppendResp;

    getResultCase(): AppendResp.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendResp.AsObject;
    static toObject(includeInstance: boolean, msg: AppendResp): AppendResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendResp;
    static deserializeBinaryFromReader(message: AppendResp, reader: jspb.BinaryReader): AppendResp;
}

export namespace AppendResp {
    export type AsObject = {
        success?: AppendResp.Success.AsObject,
        wrongExpectedVersion?: AppendResp.WrongExpectedVersion.AsObject,
    }


    export class Position extends jspb.Message { 
        getCommitPosition(): string;
        setCommitPosition(value: string): Position;
        getPreparePosition(): string;
        setPreparePosition(value: string): Position;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Position.AsObject;
        static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Position;
        static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
    }

    export namespace Position {
        export type AsObject = {
            commitPosition: string,
            preparePosition: string,
        }
    }

    export class Success extends jspb.Message { 

        hasCurrentRevision(): boolean;
        clearCurrentRevision(): void;
        getCurrentRevision(): string;
        setCurrentRevision(value: string): Success;

        hasNoStream(): boolean;
        clearNoStream(): void;
        getNoStream(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setNoStream(value?: kurrentdb_protocols_v1_shared_pb.Empty): Success;

        hasPosition(): boolean;
        clearPosition(): void;
        getPosition(): AppendResp.Position | undefined;
        setPosition(value?: AppendResp.Position): Success;

        hasNoPosition(): boolean;
        clearNoPosition(): void;
        getNoPosition(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setNoPosition(value?: kurrentdb_protocols_v1_shared_pb.Empty): Success;

        getCurrentRevisionOptionCase(): Success.CurrentRevisionOptionCase;
        getPositionOptionCase(): Success.PositionOptionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Success.AsObject;
        static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Success;
        static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
    }

    export namespace Success {
        export type AsObject = {
            currentRevision: string,
            noStream?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            position?: AppendResp.Position.AsObject,
            noPosition?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
        }

        export enum CurrentRevisionOptionCase {
            CURRENT_REVISION_OPTION_NOT_SET = 0,
            CURRENT_REVISION = 1,
            NO_STREAM = 2,
        }

        export enum PositionOptionCase {
            POSITION_OPTION_NOT_SET = 0,
            POSITION = 3,
            NO_POSITION = 4,
        }

    }

    export class WrongExpectedVersion extends jspb.Message { 

        hasCurrentRevision2060(): boolean;
        clearCurrentRevision2060(): void;
        getCurrentRevision2060(): number;
        setCurrentRevision2060(value: number): WrongExpectedVersion;

        hasNoStream2060(): boolean;
        clearNoStream2060(): void;
        getNoStream2060(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setNoStream2060(value?: kurrentdb_protocols_v1_shared_pb.Empty): WrongExpectedVersion;

        hasExpectedRevision2060(): boolean;
        clearExpectedRevision2060(): void;
        getExpectedRevision2060(): number;
        setExpectedRevision2060(value: number): WrongExpectedVersion;

        hasAny2060(): boolean;
        clearAny2060(): void;
        getAny2060(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setAny2060(value?: kurrentdb_protocols_v1_shared_pb.Empty): WrongExpectedVersion;

        hasStreamExists2060(): boolean;
        clearStreamExists2060(): void;
        getStreamExists2060(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setStreamExists2060(value?: kurrentdb_protocols_v1_shared_pb.Empty): WrongExpectedVersion;

        hasCurrentRevision(): boolean;
        clearCurrentRevision(): void;
        getCurrentRevision(): string;
        setCurrentRevision(value: string): WrongExpectedVersion;

        hasCurrentNoStream(): boolean;
        clearCurrentNoStream(): void;
        getCurrentNoStream(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setCurrentNoStream(value?: kurrentdb_protocols_v1_shared_pb.Empty): WrongExpectedVersion;

        hasExpectedRevision(): boolean;
        clearExpectedRevision(): void;
        getExpectedRevision(): string;
        setExpectedRevision(value: string): WrongExpectedVersion;

        hasExpectedAny(): boolean;
        clearExpectedAny(): void;
        getExpectedAny(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setExpectedAny(value?: kurrentdb_protocols_v1_shared_pb.Empty): WrongExpectedVersion;

        hasExpectedStreamExists(): boolean;
        clearExpectedStreamExists(): void;
        getExpectedStreamExists(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setExpectedStreamExists(value?: kurrentdb_protocols_v1_shared_pb.Empty): WrongExpectedVersion;

        hasExpectedNoStream(): boolean;
        clearExpectedNoStream(): void;
        getExpectedNoStream(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setExpectedNoStream(value?: kurrentdb_protocols_v1_shared_pb.Empty): WrongExpectedVersion;

        getCurrentRevisionOption2060Case(): WrongExpectedVersion.CurrentRevisionOption2060Case;
        getExpectedRevisionOption2060Case(): WrongExpectedVersion.ExpectedRevisionOption2060Case;
        getCurrentRevisionOptionCase(): WrongExpectedVersion.CurrentRevisionOptionCase;
        getExpectedRevisionOptionCase(): WrongExpectedVersion.ExpectedRevisionOptionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WrongExpectedVersion.AsObject;
        static toObject(includeInstance: boolean, msg: WrongExpectedVersion): WrongExpectedVersion.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WrongExpectedVersion, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WrongExpectedVersion;
        static deserializeBinaryFromReader(message: WrongExpectedVersion, reader: jspb.BinaryReader): WrongExpectedVersion;
    }

    export namespace WrongExpectedVersion {
        export type AsObject = {
            currentRevision2060: number,
            noStream2060?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            expectedRevision2060: number,
            any2060?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            streamExists2060?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            currentRevision: string,
            currentNoStream?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            expectedRevision: string,
            expectedAny?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            expectedStreamExists?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            expectedNoStream?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
        }

        export enum CurrentRevisionOption2060Case {
            CURRENT_REVISION_OPTION_20_6_0_NOT_SET = 0,
            CURRENT_REVISION_20_6_0 = 1,
            NO_STREAM_20_6_0 = 2,
        }

        export enum ExpectedRevisionOption2060Case {
            EXPECTED_REVISION_OPTION_20_6_0_NOT_SET = 0,
            EXPECTED_REVISION_20_6_0 = 3,
            ANY_20_6_0 = 4,
            STREAM_EXISTS_20_6_0 = 5,
        }

        export enum CurrentRevisionOptionCase {
            CURRENT_REVISION_OPTION_NOT_SET = 0,
            CURRENT_REVISION = 6,
            CURRENT_NO_STREAM = 7,
        }

        export enum ExpectedRevisionOptionCase {
            EXPECTED_REVISION_OPTION_NOT_SET = 0,
            EXPECTED_REVISION = 8,
            EXPECTED_ANY = 9,
            EXPECTED_STREAM_EXISTS = 10,
            EXPECTED_NO_STREAM = 11,
        }

    }


    export enum ResultCase {
        RESULT_NOT_SET = 0,
        SUCCESS = 1,
        WRONG_EXPECTED_VERSION = 2,
    }

}

export class BatchAppendReq extends jspb.Message { 

    hasCorrelationId(): boolean;
    clearCorrelationId(): void;
    getCorrelationId(): kurrentdb_protocols_v1_shared_pb.UUID | undefined;
    setCorrelationId(value?: kurrentdb_protocols_v1_shared_pb.UUID): BatchAppendReq;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): BatchAppendReq.Options | undefined;
    setOptions(value?: BatchAppendReq.Options): BatchAppendReq;
    clearProposedMessagesList(): void;
    getProposedMessagesList(): Array<BatchAppendReq.ProposedMessage>;
    setProposedMessagesList(value: Array<BatchAppendReq.ProposedMessage>): BatchAppendReq;
    addProposedMessages(value?: BatchAppendReq.ProposedMessage, index?: number): BatchAppendReq.ProposedMessage;
    getIsFinal(): boolean;
    setIsFinal(value: boolean): BatchAppendReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchAppendReq.AsObject;
    static toObject(includeInstance: boolean, msg: BatchAppendReq): BatchAppendReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchAppendReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchAppendReq;
    static deserializeBinaryFromReader(message: BatchAppendReq, reader: jspb.BinaryReader): BatchAppendReq;
}

export namespace BatchAppendReq {
    export type AsObject = {
        correlationId?: kurrentdb_protocols_v1_shared_pb.UUID.AsObject,
        options?: BatchAppendReq.Options.AsObject,
        proposedMessagesList: Array<BatchAppendReq.ProposedMessage.AsObject>,
        isFinal: boolean,
    }


    export class Options extends jspb.Message { 

        hasStreamIdentifier(): boolean;
        clearStreamIdentifier(): void;
        getStreamIdentifier(): kurrentdb_protocols_v1_shared_pb.StreamIdentifier | undefined;
        setStreamIdentifier(value?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier): Options;

        hasStreamPosition(): boolean;
        clearStreamPosition(): void;
        getStreamPosition(): string;
        setStreamPosition(value: string): Options;

        hasNoStream(): boolean;
        clearNoStream(): void;
        getNoStream(): google_protobuf_empty_pb.Empty | undefined;
        setNoStream(value?: google_protobuf_empty_pb.Empty): Options;

        hasAny(): boolean;
        clearAny(): void;
        getAny(): google_protobuf_empty_pb.Empty | undefined;
        setAny(value?: google_protobuf_empty_pb.Empty): Options;

        hasStreamExists(): boolean;
        clearStreamExists(): void;
        getStreamExists(): google_protobuf_empty_pb.Empty | undefined;
        setStreamExists(value?: google_protobuf_empty_pb.Empty): Options;

        hasDeadline21100(): boolean;
        clearDeadline21100(): void;
        getDeadline21100(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setDeadline21100(value?: google_protobuf_timestamp_pb.Timestamp): Options;

        hasDeadline(): boolean;
        clearDeadline(): void;
        getDeadline(): google_protobuf_duration_pb.Duration | undefined;
        setDeadline(value?: google_protobuf_duration_pb.Duration): Options;

        getExpectedStreamPositionCase(): Options.ExpectedStreamPositionCase;
        getDeadlineOptionCase(): Options.DeadlineOptionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            streamIdentifier?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier.AsObject,
            streamPosition: string,
            noStream?: google_protobuf_empty_pb.Empty.AsObject,
            any?: google_protobuf_empty_pb.Empty.AsObject,
            streamExists?: google_protobuf_empty_pb.Empty.AsObject,
            deadline21100?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            deadline?: google_protobuf_duration_pb.Duration.AsObject,
        }

        export enum ExpectedStreamPositionCase {
            EXPECTED_STREAM_POSITION_NOT_SET = 0,
            STREAM_POSITION = 2,
            NO_STREAM = 3,
            ANY = 4,
            STREAM_EXISTS = 5,
        }

        export enum DeadlineOptionCase {
            DEADLINE_OPTION_NOT_SET = 0,
            DEADLINE_21_10_0 = 6,
            DEADLINE = 7,
        }

    }

    export class ProposedMessage extends jspb.Message { 

        hasId(): boolean;
        clearId(): void;
        getId(): kurrentdb_protocols_v1_shared_pb.UUID | undefined;
        setId(value?: kurrentdb_protocols_v1_shared_pb.UUID): ProposedMessage;

        getMetadataMap(): jspb.Map<string, string>;
        clearMetadataMap(): void;
        getCustomMetadata(): Uint8Array | string;
        getCustomMetadata_asU8(): Uint8Array;
        getCustomMetadata_asB64(): string;
        setCustomMetadata(value: Uint8Array | string): ProposedMessage;
        getData(): Uint8Array | string;
        getData_asU8(): Uint8Array;
        getData_asB64(): string;
        setData(value: Uint8Array | string): ProposedMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ProposedMessage.AsObject;
        static toObject(includeInstance: boolean, msg: ProposedMessage): ProposedMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ProposedMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ProposedMessage;
        static deserializeBinaryFromReader(message: ProposedMessage, reader: jspb.BinaryReader): ProposedMessage;
    }

    export namespace ProposedMessage {
        export type AsObject = {
            id?: kurrentdb_protocols_v1_shared_pb.UUID.AsObject,

            metadataMap: Array<[string, string]>,
            customMetadata: Uint8Array | string,
            data: Uint8Array | string,
        }
    }

}

export class BatchAppendResp extends jspb.Message { 

    hasCorrelationId(): boolean;
    clearCorrelationId(): void;
    getCorrelationId(): kurrentdb_protocols_v1_shared_pb.UUID | undefined;
    setCorrelationId(value?: kurrentdb_protocols_v1_shared_pb.UUID): BatchAppendResp;

    hasError(): boolean;
    clearError(): void;
    getError(): kurrentdb_protocols_v1_status_pb.Status | undefined;
    setError(value?: kurrentdb_protocols_v1_status_pb.Status): BatchAppendResp;

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): BatchAppendResp.Success | undefined;
    setSuccess(value?: BatchAppendResp.Success): BatchAppendResp;

    hasStreamIdentifier(): boolean;
    clearStreamIdentifier(): void;
    getStreamIdentifier(): kurrentdb_protocols_v1_shared_pb.StreamIdentifier | undefined;
    setStreamIdentifier(value?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier): BatchAppendResp;

    hasStreamPosition(): boolean;
    clearStreamPosition(): void;
    getStreamPosition(): string;
    setStreamPosition(value: string): BatchAppendResp;

    hasNoStream(): boolean;
    clearNoStream(): void;
    getNoStream(): google_protobuf_empty_pb.Empty | undefined;
    setNoStream(value?: google_protobuf_empty_pb.Empty): BatchAppendResp;

    hasAny(): boolean;
    clearAny(): void;
    getAny(): google_protobuf_empty_pb.Empty | undefined;
    setAny(value?: google_protobuf_empty_pb.Empty): BatchAppendResp;

    hasStreamExists(): boolean;
    clearStreamExists(): void;
    getStreamExists(): google_protobuf_empty_pb.Empty | undefined;
    setStreamExists(value?: google_protobuf_empty_pb.Empty): BatchAppendResp;

    getResultCase(): BatchAppendResp.ResultCase;
    getExpectedStreamPositionCase(): BatchAppendResp.ExpectedStreamPositionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchAppendResp.AsObject;
    static toObject(includeInstance: boolean, msg: BatchAppendResp): BatchAppendResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchAppendResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchAppendResp;
    static deserializeBinaryFromReader(message: BatchAppendResp, reader: jspb.BinaryReader): BatchAppendResp;
}

export namespace BatchAppendResp {
    export type AsObject = {
        correlationId?: kurrentdb_protocols_v1_shared_pb.UUID.AsObject,
        error?: kurrentdb_protocols_v1_status_pb.Status.AsObject,
        success?: BatchAppendResp.Success.AsObject,
        streamIdentifier?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier.AsObject,
        streamPosition: string,
        noStream?: google_protobuf_empty_pb.Empty.AsObject,
        any?: google_protobuf_empty_pb.Empty.AsObject,
        streamExists?: google_protobuf_empty_pb.Empty.AsObject,
    }


    export class Success extends jspb.Message { 

        hasCurrentRevision(): boolean;
        clearCurrentRevision(): void;
        getCurrentRevision(): string;
        setCurrentRevision(value: string): Success;

        hasNoStream(): boolean;
        clearNoStream(): void;
        getNoStream(): google_protobuf_empty_pb.Empty | undefined;
        setNoStream(value?: google_protobuf_empty_pb.Empty): Success;

        hasPosition(): boolean;
        clearPosition(): void;
        getPosition(): kurrentdb_protocols_v1_shared_pb.AllStreamPosition | undefined;
        setPosition(value?: kurrentdb_protocols_v1_shared_pb.AllStreamPosition): Success;

        hasNoPosition(): boolean;
        clearNoPosition(): void;
        getNoPosition(): google_protobuf_empty_pb.Empty | undefined;
        setNoPosition(value?: google_protobuf_empty_pb.Empty): Success;

        getCurrentRevisionOptionCase(): Success.CurrentRevisionOptionCase;
        getPositionOptionCase(): Success.PositionOptionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Success.AsObject;
        static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Success;
        static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
    }

    export namespace Success {
        export type AsObject = {
            currentRevision: string,
            noStream?: google_protobuf_empty_pb.Empty.AsObject,
            position?: kurrentdb_protocols_v1_shared_pb.AllStreamPosition.AsObject,
            noPosition?: google_protobuf_empty_pb.Empty.AsObject,
        }

        export enum CurrentRevisionOptionCase {
            CURRENT_REVISION_OPTION_NOT_SET = 0,
            CURRENT_REVISION = 1,
            NO_STREAM = 2,
        }

        export enum PositionOptionCase {
            POSITION_OPTION_NOT_SET = 0,
            POSITION = 3,
            NO_POSITION = 4,
        }

    }


    export enum ResultCase {
        RESULT_NOT_SET = 0,
        ERROR = 2,
        SUCCESS = 3,
    }

    export enum ExpectedStreamPositionCase {
        EXPECTED_STREAM_POSITION_NOT_SET = 0,
        STREAM_POSITION = 5,
        NO_STREAM = 6,
        ANY = 7,
        STREAM_EXISTS = 8,
    }

}

export class DeleteReq extends jspb.Message { 

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): DeleteReq.Options | undefined;
    setOptions(value?: DeleteReq.Options): DeleteReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteReq.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteReq): DeleteReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteReq;
    static deserializeBinaryFromReader(message: DeleteReq, reader: jspb.BinaryReader): DeleteReq;
}

export namespace DeleteReq {
    export type AsObject = {
        options?: DeleteReq.Options.AsObject,
    }


    export class Options extends jspb.Message { 

        hasStreamIdentifier(): boolean;
        clearStreamIdentifier(): void;
        getStreamIdentifier(): kurrentdb_protocols_v1_shared_pb.StreamIdentifier | undefined;
        setStreamIdentifier(value?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier): Options;

        hasRevision(): boolean;
        clearRevision(): void;
        getRevision(): string;
        setRevision(value: string): Options;

        hasNoStream(): boolean;
        clearNoStream(): void;
        getNoStream(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setNoStream(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        hasAny(): boolean;
        clearAny(): void;
        getAny(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setAny(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        hasStreamExists(): boolean;
        clearStreamExists(): void;
        getStreamExists(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setStreamExists(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        getExpectedStreamRevisionCase(): Options.ExpectedStreamRevisionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            streamIdentifier?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier.AsObject,
            revision: string,
            noStream?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            any?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            streamExists?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
        }

        export enum ExpectedStreamRevisionCase {
            EXPECTED_STREAM_REVISION_NOT_SET = 0,
            REVISION = 2,
            NO_STREAM = 3,
            ANY = 4,
            STREAM_EXISTS = 5,
        }

    }

}

export class DeleteResp extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): DeleteResp.Position | undefined;
    setPosition(value?: DeleteResp.Position): DeleteResp;

    hasNoPosition(): boolean;
    clearNoPosition(): void;
    getNoPosition(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
    setNoPosition(value?: kurrentdb_protocols_v1_shared_pb.Empty): DeleteResp;

    getPositionOptionCase(): DeleteResp.PositionOptionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResp.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResp): DeleteResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResp;
    static deserializeBinaryFromReader(message: DeleteResp, reader: jspb.BinaryReader): DeleteResp;
}

export namespace DeleteResp {
    export type AsObject = {
        position?: DeleteResp.Position.AsObject,
        noPosition?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
    }


    export class Position extends jspb.Message { 
        getCommitPosition(): string;
        setCommitPosition(value: string): Position;
        getPreparePosition(): string;
        setPreparePosition(value: string): Position;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Position.AsObject;
        static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Position;
        static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
    }

    export namespace Position {
        export type AsObject = {
            commitPosition: string,
            preparePosition: string,
        }
    }


    export enum PositionOptionCase {
        POSITION_OPTION_NOT_SET = 0,
        POSITION = 1,
        NO_POSITION = 2,
    }

}

export class TombstoneReq extends jspb.Message { 

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): TombstoneReq.Options | undefined;
    setOptions(value?: TombstoneReq.Options): TombstoneReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TombstoneReq.AsObject;
    static toObject(includeInstance: boolean, msg: TombstoneReq): TombstoneReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TombstoneReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TombstoneReq;
    static deserializeBinaryFromReader(message: TombstoneReq, reader: jspb.BinaryReader): TombstoneReq;
}

export namespace TombstoneReq {
    export type AsObject = {
        options?: TombstoneReq.Options.AsObject,
    }


    export class Options extends jspb.Message { 

        hasStreamIdentifier(): boolean;
        clearStreamIdentifier(): void;
        getStreamIdentifier(): kurrentdb_protocols_v1_shared_pb.StreamIdentifier | undefined;
        setStreamIdentifier(value?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier): Options;

        hasRevision(): boolean;
        clearRevision(): void;
        getRevision(): string;
        setRevision(value: string): Options;

        hasNoStream(): boolean;
        clearNoStream(): void;
        getNoStream(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setNoStream(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        hasAny(): boolean;
        clearAny(): void;
        getAny(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setAny(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        hasStreamExists(): boolean;
        clearStreamExists(): void;
        getStreamExists(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
        setStreamExists(value?: kurrentdb_protocols_v1_shared_pb.Empty): Options;

        getExpectedStreamRevisionCase(): Options.ExpectedStreamRevisionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            streamIdentifier?: kurrentdb_protocols_v1_shared_pb.StreamIdentifier.AsObject,
            revision: string,
            noStream?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            any?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
            streamExists?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
        }

        export enum ExpectedStreamRevisionCase {
            EXPECTED_STREAM_REVISION_NOT_SET = 0,
            REVISION = 2,
            NO_STREAM = 3,
            ANY = 4,
            STREAM_EXISTS = 5,
        }

    }

}

export class TombstoneResp extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): TombstoneResp.Position | undefined;
    setPosition(value?: TombstoneResp.Position): TombstoneResp;

    hasNoPosition(): boolean;
    clearNoPosition(): void;
    getNoPosition(): kurrentdb_protocols_v1_shared_pb.Empty | undefined;
    setNoPosition(value?: kurrentdb_protocols_v1_shared_pb.Empty): TombstoneResp;

    getPositionOptionCase(): TombstoneResp.PositionOptionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TombstoneResp.AsObject;
    static toObject(includeInstance: boolean, msg: TombstoneResp): TombstoneResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TombstoneResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TombstoneResp;
    static deserializeBinaryFromReader(message: TombstoneResp, reader: jspb.BinaryReader): TombstoneResp;
}

export namespace TombstoneResp {
    export type AsObject = {
        position?: TombstoneResp.Position.AsObject,
        noPosition?: kurrentdb_protocols_v1_shared_pb.Empty.AsObject,
    }


    export class Position extends jspb.Message { 
        getCommitPosition(): string;
        setCommitPosition(value: string): Position;
        getPreparePosition(): string;
        setPreparePosition(value: string): Position;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Position.AsObject;
        static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Position;
        static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
    }

    export namespace Position {
        export type AsObject = {
            commitPosition: string,
            preparePosition: string,
        }
    }


    export enum PositionOptionCase {
        POSITION_OPTION_NOT_SET = 0,
        POSITION = 1,
        NO_POSITION = 2,
    }

}
