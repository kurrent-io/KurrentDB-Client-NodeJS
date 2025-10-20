const kdbImage = ((): string => {
  const image =
    process.env.KURRENT_IMAGE ??
    "docker.cloudsmith.io/eventstore/kurrent-staging/kurrentdb:ci";

  return image;
})();

export const dockerImages = {
  volumesProvisioner: "hasnat/volumes-provisioner",
  certGen: "docker.eventstore.com/eventstore-utils/es-gencert-cli:latest",
  kdb: kdbImage,
};
