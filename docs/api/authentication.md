---
title: Authentication
order: 7
---

# Client x.509 certificate 

<Badge type="info" vertical="middle" text="License Required"/>

X.509 certificates are digital certificates that use the X.509 public key infrastructure (PKI) standard to verify the identity of clients and servers. They play a crucial role in establishing a secure connection by providing a way to authenticate identities and establish trust.

## Prerequisites

1. KurrentDB 25.0 or greater, or EventStoreDB 24.10 or later.
2. A valid X.509 certificate configured on the Database. See [configuration steps](@server/security/user-authentication.html#user-x-509-certificates) for more details.

## Connect using an x.509 certificate

To connect using an x.509 certificate, you need to provide the certificate and
the private key to the client. If both username or password and certificate
authentication data are supplied, the client prioritizes user credentials for
authentication. The client will throw an error if the certificate and the key
are not both provided.

The client supports the following parameters:

| Parameter      | Description                                                                    |
|----------------|--------------------------------------------------------------------------------|
| `userCertFile` | The file containing the X.509 user certificate in PEM format.                  |
| `userKeyFile`  | The file containing the user certificate’s matching private key in PEM format. |

To authenticate, include these two parameters in your connection string or constructor when initializing the client:

```ts
const connectionString = `kurrentdb://admin:changeit@{endpoint}?tls=true&userCertFile={pathToCaFile}&userKeyFile={pathToKeyFile}`;
const client = KurrentDBClient.connectionString(connectionString);
```