module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@seeds/(.*)$': '<rootDir>/src/seeds/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
  },
};
