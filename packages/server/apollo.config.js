module.exports = {
  service: {
    name: "graphql-poc",
    // localSchemaFile: './src/graphql/schema.graphql',
    includes: ["src/**/*.{ts,tsx,js,jsx,graphql,gql}"],
    excludes: ["**/node_modules", "**/__tests__"],
    endpoint: {
      url: "http://localhost:4000/graphql",
    },
  },
};
