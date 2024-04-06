/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["<rootDir>/", "node_modules"],
  modulePathIgnorePatterns: ["dist"],
  verbose: true,
};
