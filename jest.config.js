module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
  "^.+\\.tsx?$": "ts-jest",
  "\\.svg$": "<rootDir>/src/fileTransformer.ts"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
}
