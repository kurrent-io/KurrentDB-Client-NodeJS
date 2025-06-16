<a href="https://kurrent.io">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="KurrentLogo-White.png">
    <source media="(prefers-color-scheme: light)" srcset="KurrentLogo-Black.png">
    <img alt="Kurrent" src="KurrentLogo-Plum.png" height="50%" width="50%">
  </picture>
</a>

# KurrentDB NodeJS Client

[![Previous LTS](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_previous_LTS.yml/badge.svg)](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_previous_LTS.yml)
[![LTS](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_LTS.yml/badge.svg)](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_LTS.yml)
[![next](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_next.yml/badge.svg)](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/actions/workflows/test_next.yml)

KurrentDB is a database that's engineered for modern software applications and event-driven architectures. Its
event-native design simplifies data modeling and preserves data integrity while the integrated streaming engine solves
distributed messaging challenges and ensures data consistency.

### Documentation

* [Samples](https://github.com/kurrent-io/KurrentDB-Client-NodeJS/tree/master/packages/test/src/samples)

## Packages

This monorepo contains the following packages:

| Subfolder                                            | Package                                                                                |
|------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`packages/db-client/`](packages/db-client/)         | [`@kurrent/kurrentdb-client`](https://www.npmjs.com/package/@kurrent/kurrentdb-client) |
| [`packages/opentelemetry/`](packages/opentelemetry/) | [`@kurrent/opentelemetry`](https://www.npmjs.com/package/@kurrent/opentelemetry)       |
| [`packages/test/`](packages/test/)                   | Internal tests                                                                         |

The client uses [KurrentDB-Bridge-Client](https://github.com/kurrent-io/KurrentDB-Bridge-Client)
to significantly improve read performance by leveraging Rust through native addons.

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
