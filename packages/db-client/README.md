# @kurrent/kurrentdb-client

[![npm](https://img.shields.io/npm/v/@kurrent/kurrentdb-client.svg)](https://www.npmjs.com/package/@kurrent/kurrentdb-client)
[![Previous LTS](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_previous_LTS.yml/badge.svg)](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_previous_LTS.yml)
[![LTS](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_LTS.yml/badge.svg)](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_LTS.yml)
[![next](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_next.yml/badge.svg)](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_next.yml)

[![license][license-badge]][license-badge-url]

This is the package for the NodeJS client for KurrentDB 20+ and uses gRPC as the communication protocol.

## Installation

```shell script
# Yarn
$ yarn add @kurrent/kurrentdb-client

# NPM
$ npm install --save @kurrent/kurrentdb-client
```

## KurrentDB Server Compatibility

Tests are run exclusively against Long-Term Support (LTS) versions. While the code may function with older versions, we do not provide any guarantees or support for them.

Server setup instructions can be found under the installation section of the [Kurrent Docs]. Follow the Docker setup for the simplest configuration.

## Example

The following snippet showcases a simple example where we form a connection, then append and read events from the server.

###### Javascript example:

```javascript
const {
  KurrentDBClient,
  jsonEvent,
  FORWARDS,
  START,
} = require('@kurrent/kurrentdb-client');

const client = new KurrentDBClient({
  endpoint: "localhost:2113",
});

async function simpleTest() {
  const streamName = "es_supported_clients";

  const event = jsonEvent({
    type: "grpc-client",
    data: {
      languages: ["typescript", "javascript"],
      runtime: "NodeJS",
    },
  });

  const appendResult = await client.appendToStream(streamName, [event]);

    // read the event
    const events = client.readStream(streamName, {
      fromRevision: START,
      direction: FORWARDS,
      maxCount: 10,
    });

    for await (const { event } of events) {
      console.log('Appended event: ', event);
    }
  } catch (error) {
    console.error('An error occured: ', error);
  } finally {
    await client.dispose();
  }
})();
```

###### Typescript example:

```typescript
import {
  KurrentDBClient,
  jsonEvent,
  FORWARDS,
  START,
  JSONEventType,
} from '@kurrent/kurrentdb-client';

const client = new KurrentDBClient({
  endpoint: 'localhost:2113',
});

interface Reservation {
  reservationId: string;
  movieId: string;
  userId: string;
  seatId: string;
}

type SeatReservedEvent = JSONEventType<
  'seat-reserved',
  {
    reservationId: string;
    movieId: string;
    userId: string;
    seatId: string;
  }
>;

type SeatChangedEvent = JSONEventType<
  'seat-changed',
  {
    reservationId: string;
    newSeatId: string;
  }
>;

type ReservationEvents = SeatReservedEvent | SeatChangedEvent;

async function simpleTest(): Promise<void> {
  const streamName = 'booking-abc123';

  const event = jsonEvent<SeatReservedEvent>({
    type: 'seat-reserved',
    data: {
      reservationId: 'abc123',
      movieId: 'tt0368226',
      userId: 'nm0802995',
      seatId: '4b',
    },
  });

  const appendResult = await client.appendToStream<ReservationEvents>(
    streamName,
    event
  );

  // By reading the events in the stream, we can construct the current state of the booking

  interface Reservation {
    reservationId: string;
    movieId: string;
    userId: string;
    seatId: string;
  }

  const events = client.readStream<ReservationEvents>(streamName, {
    fromRevision: START,
    direction: FORWARDS,
    maxCount: 10,
  });

  const reservation: Partial<Reservation> = {};

  for await (const { event } of events) {
    switch (event.type) {
      case 'seat-reserved': {
        reservation.reservationId = event.data.reservationId;
        reservation.movieId = event.data.movieId;
        reservation.seatId = event.data.seatId;
        reservation.userId = event.data.userId;
        break;
      }
      case 'seat-changed': {
        reservation.seatId = event.data.newSeatId;
        break;
      }
      default: {
        const _exhaustiveCheck: never = event;
        break;
      }
    }
  }
}

// Do something with our reservation
console.log(reservation);
```

## Communities

[Join our global community](https://www.kurrent.io/community) of developers.

- [Discuss](https://discuss.kurrent.io/)
- [Discord (Kurrent)](https://discord.gg/Phn9pmCw3t)
- [Discord (ddd-cqrs-es)](https://discord.com/invite/sEZGSHNNbH)

## Contributing

Development is done on the `master` branch.
We attempt to do our best to ensure that the history remains clean and to do so, we generally ask contributors to squash
their commits into a set or single logical commit.

- [Create an issue](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/issues)
- [Documentation](https://docs.kurrent.io/)
- [Contributing guide](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/blob/master/CONTRIBUTING.md)

## Building the client

The client is built using the [NodeJS](https://nodejs.org/) JavaScript runtime. To build the client, you need to have Node
installed on your machine. You can download it from the official NodeJS website.
Once you have it installed, you can build the client by running the following command in the root directory of the
project:

```bash
yarn install
yarn build
```