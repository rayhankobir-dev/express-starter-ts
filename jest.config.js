module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
    "^@middlewares/(.*)$": "<rootDir>/src/middlewares/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@models/(.*)$": "<rootDir>/src/models/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
  },
};
