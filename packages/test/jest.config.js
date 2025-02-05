module.exports = {
  testTimeout: 60_000,
  preset: 'ts-jest',
  testMatch: ['**/src/**/*.test.ts', '**/src/samples/*.ts'],
  globalSetup: '<rootDir>/src/utils/preflight.ts',
  moduleNameMapper: {
    '@test-utils': '<rootDir>/src/utils',
    "^@eventstore/db-client$": "<rootDir>/../db-client/dist/index",
    "^@eventstore/db-client/(.*)$": "<rootDir>/../db-client/$1",
    "^@eventstore/db-client-bridge$": "<rootDir>/../db-client-bridge/lib/index",
    "^@eventstore/db-client-bridge/(.*)$": "<rootDir>/../db-client-bridge/$1",
    "^@eventstore/opentelemetry$": "<rootDir>/../opentelemetry/dist/index",
    "^@eventstore/opentelemetry/(.*)$": "<rootDir>/../opentelemetry/$1",
  },

  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }]
  },
};
