import type { IGraphQLConfig } from "graphql-config";

const projectId = "t2zgeg0i";
const dataset = "production";

const config: IGraphQLConfig = {
  schema: [
    `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`,
    "./src/gql/schema.gql",
  ],
  documents: ["src/**/*.gql", "app/**/*.gql"],
};

export default config;
