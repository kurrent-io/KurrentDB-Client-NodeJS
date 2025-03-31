# @kurrent/opentelemetry

This module provides automatic tracing instrumentation for [KurrentDB-Client-NodeJS].

Compatible with OpenTelemetry JS API and SDK `1.0+`.

## Installation

```bash
npm install --save @kurrent/opentelemetry
```

### Supported Versions

- `[1.x]`

It's likely that the instrumentation would support earlier versions of KurrentDB, but this has not been tested.

## Usage

OpenTelemetry KurrentDB Instrumentation allows the user to automatically collect trace data from append and subscription operations and export them to the backend of choice.

To load the instrumentation, specify it in the instrumentations list to `registerInstrumentations`. There is currently no configuration option.

```javascript
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { EventStoreDBInstrumentation } = require('@kurrent/opentelemetry');

const provider = new NodeTracerProvider();
provider.register();

registerInstrumentations({
  instrumentations: [
    new KurrentDBInstrumentation(),
  ],
});
```

## Useful links

- For more information on OpenTelemetry, visit: <https://opentelemetry.io/>
- For more about OpenTelemetry JavaScript: <https://github.com/open-telemetry/opentelemetry-js>
- For help or feedback on this project, open an issue or submit a PR

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