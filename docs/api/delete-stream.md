---
order: 9
head:
  - - title
    - {}
    - Deleting Events | NodeJS | Clients | Kurrent Docs
---

# Deleting Events

In KurrentDB, you can delete events and streams either partially or
completely. Settings like $maxAge and $maxCount help control how long events are
kept or how many events are stored in a stream, but they won't delete the entire
stream.  When you need to fully remove a stream, KurrentDB offers two
options: Soft Delete and Hard Delete.

## Soft delete

Soft delete in KurrentDB allows you to mark a stream for deletion without
completely removing it, so you can still add new events later. While you can do
this through the UI, using code is often better for automating the process,
handling many streams at once, or including custom rules. Code is especially
helpful for large-scale deletions or when you need to integrate soft deletes
into other workflows.

```ts
await client.deleteStream(streamName);
```

::: note 
Clicking the delete button in the UI performs a soft delete, setting the
TruncateBefore value to remove all events up to a certain point.  While this
marks the events for deletion, actual removal occurs during the next scavenging
process.  The stream can still be reopened by appending new events.
:::

## Hard delete

Hard delete in KurrentDB permanently removes a stream and its events. While
you can use the HTTP API, code is often better for automating the process,
managing multiple streams, and ensuring precise control. Code is especially
useful when you need to integrate hard delete into larger workflows or apply
specific conditions. Note that when a stream is hard deleted, you cannot reuse
the stream name, it will raise an exception if you try to append to it again.

```ts
await client.tombstoneStream(streamName);
```