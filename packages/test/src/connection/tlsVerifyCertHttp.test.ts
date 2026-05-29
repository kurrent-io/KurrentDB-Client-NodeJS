import { createServer, Server } from "https";
import { AddressInfo } from "net";

import { HTTP } from "@kurrent/kurrentdb-client/dist/Client/http";
import type { Client } from "@kurrent/kurrentdb-client/dist/Client";

const CERT = `-----BEGIN CERTIFICATE-----
MIIDJzCCAg+gAwIBAgIUackXrpevDI9m1Tvn+Vp24oZICEkwDQYJKoZIhvcNAQEL
BQAwFDESMBAGA1UEAwwJbG9jYWxob3N0MCAXDTI2MDUyODE0MTQxMloYDzIxMjYw
NTA0MTQxNDEyWjAUMRIwEAYDVQQDDAlsb2NhbGhvc3QwggEiMA0GCSqGSIb3DQEB
AQUAA4IBDwAwggEKAoIBAQDt7VcfbcApLw8XbPiPuxZtH+39kd4V8+TAlEjS5xjK
k3o4KXUSp/ufjMdPqNrk+qVcytbpUu3aTOR2mtsjPI6shCq3z4o7G9Tn8SuqR2uy
w5kTFpzhkswMU8BHADO5Ho/tvZXfQDFMkwBccgC27/57uRoDISOf/usYQXJqf798
aNjK6uz8N6c5UEtimWfSErqDmhvjqWkNYCUA8tyzm0L5Bfwz3UqqkW5ICwpZD09/
n+hSv/ITiDbFzdcKexDmJI0UQwrhWwcY/KYGFBuYdlYruunEHJEOlsTKBwqTUId7
JItMk5lHnF2oberaQilF8SP426rHIjpywJRHLFZ8l7tZAgMBAAGjbzBtMB0GA1Ud
DgQWBBRuIK0VKP5b2yoQVuWhMhI3arRF4DAfBgNVHSMEGDAWgBRuIK0VKP5b2yoQ
VuWhMhI3arRF4DAPBgNVHRMBAf8EBTADAQH/MBoGA1UdEQQTMBGCCWxvY2FsaG9z
dIcEfwAAATANBgkqhkiG9w0BAQsFAAOCAQEAH1gvR7BA3PBEYiLhOlhJ50ZK3BBF
b8APINWp8LOKCoK6PJWnj8Izx/7mXiciwWBqLasuuVg/rqypCvlXZeUCU7tfUG95
JAsiuDSx8o4srKkSu4n4djbFkksxvsxFgFd2uw9fjhrC4U0iHx6JSBUJdg2RQkx1
I+hB9qreOS7A2LBsMlleTYjoKfuP3YGixIqNc7AJY0DmqZ8hHdoiqnDM2bL/A+95
npJ6e2d5xmB25+kLgQg3NpLyEWtQPXSIg1Y5ZhP7clkLcVDVIr3mP6TBuN9g191i
V62KQCbOxPjBvVYnmstcWR1omFGrt744Mx1wzGauy46xLyUn+07YfQM1Gw==
-----END CERTIFICATE-----
`;

const KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDt7VcfbcApLw8X
bPiPuxZtH+39kd4V8+TAlEjS5xjKk3o4KXUSp/ufjMdPqNrk+qVcytbpUu3aTOR2
mtsjPI6shCq3z4o7G9Tn8SuqR2uyw5kTFpzhkswMU8BHADO5Ho/tvZXfQDFMkwBc
cgC27/57uRoDISOf/usYQXJqf798aNjK6uz8N6c5UEtimWfSErqDmhvjqWkNYCUA
8tyzm0L5Bfwz3UqqkW5ICwpZD09/n+hSv/ITiDbFzdcKexDmJI0UQwrhWwcY/KYG
FBuYdlYruunEHJEOlsTKBwqTUId7JItMk5lHnF2oberaQilF8SP426rHIjpywJRH
LFZ8l7tZAgMBAAECggEAEQ1WlikOgaUexsYHln2JIO8N5oOC0D33ohm+kmb/rt0d
AFNwUZL6hLfZPQtUDN8t5NWgy34nD+M86Ic2t3LKovCiAyR7urrG6oytXXna7Sf5
m5WeTshvmV6TRENucZEQLbDNwf9eyScr+nQtOu8+ZO2iQKEqZXgmr0lZgup+9dKG
fpx1luuorRUyCOVfpoubp7CbIv/sScwiXc1RUH4t1wZa8SHb1LAhfTpZLGU8QOpU
SXjDtY6yRUKD6ihNe9cex7khiOSvECjK4x+M+lW8fpBf7SMd9uM2no9WSMaCLb7b
hA1XiDpLQ6gDJv4QXd9yRP9ZAaY6yvQIUGUoo06ElQKBgQD4Sez5iOSbT38bPWGL
8rKayPwZZ4Lp0DD5nDXWou28XDIHmb0RrIIPYsSPC1Fmovs3agAcC9bV2sOBAlKw
yw0MHy9KhofQ92P8YZeWALPprnqiS2iNngbsok7Tyj3NlRoJwD4Z70OmlZQV9z1T
ARd2LKypFFM1yMqDnuwHT8jrpwKBgQD1UQgvw7PdmZiNnOJeW1r9YDy7RW0d93O5
pkSe2NcJ9BOP6J7xnkzzA85H6+MLkm7ivFOjUyhCPELmiW07aufVm9xcxtZ750k/
22bFClcP+0TUqRlwEEzVK3uPkIKtdUXKelsUUy2hjDa3BNp3+3/np8vrkgohNqSD
oo6gy4MA/wKBgQD0kYUe64wbvDu87kJm4wKxWyaQM5kNjSigxxF1QfohX0Ncn0BQ
53cZhrWNHZ3qFsKT/BLtjW/qKVoIeuxO/0Pz28fuhgPEf9t6X/s8I6cUmOxtbxAm
5zF06A/zqLQmDCeg0T+atkcSESbUWDyMxXeBzVGqHr40LXvmGKXwMdP84wKBgEC4
Mhq33NoXzaF+xFH0dBroqt0VQeZoBEX0UaI+vuzHUenjixtfkhmC5Ycf+nRxG4QB
/2bVZ4eh8lxz4TeNysAWMJrhcnCZ4j9QmNpfEf0LY2tfeXCRPFP49s43Z+JvUAxN
H35LO3ylS0IZq7F/zozFPg1WKAn/KoP3/Pz69ALtAoGBANxwiJB2/GhQf3E4TY6/
DQVqPUBeYliMWh0+mTZQ1qiVK+17OLiJIlQsetVjqA94Ae9SsdPsgE9X3S2exBlq
zGgLMABl3eyE6WIuPm7CPpYPGTw1ZGzQ//qNWuM1afOoBChvnfxp0YK0YzJXGu01
a/ydECd2k4EgssjmdxN/iRgb
-----END PRIVATE KEY-----
`;

describe("tlsVerifyCert (HTTP fallback)", () => {
  let server: Server;
  let target: string;

  beforeAll(
    () =>
      new Promise<void>((resolve) => {
        server = createServer({ cert: CERT, key: KEY }, (_req, res) => {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify({ ok: true }));
        });
        server.listen(0, "127.0.0.1", () => {
          const { port } = server.address() as AddressInfo;
          target = `dns:127.0.0.1:${port}`;
          resolve();
        });
      })
  );

  afterAll(() => new Promise<void>((resolve) => server.close(() => resolve())));

  const makeClient = () =>
    ({
      getChannel: async () => ({ getTarget: () => target }),
    } as unknown as Client);

  test("succeeds against a self-signed server when rejectUnauthorized is false", async () => {
    const http = new HTTP(
      makeClient(),
      { verifyOptions: { rejectUnauthorized: false } },
      async () => undefined
    );

    await expect(http.request("GET", "/", {})).resolves.toEqual({ ok: true });
  });

  test("fails against a self-signed server when verification is left on", async () => {
    const http = new HTTP(makeClient(), {}, async () => undefined);

    await expect(http.request("GET", "/", {})).rejects.toThrow(
      /self.?signed|certificate|unable to verify/i
    );
  });
});
