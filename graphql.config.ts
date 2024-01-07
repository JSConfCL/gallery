import type { IGraphQLConfig } from "graphql-config";

const projectId = "t2zgeg0i";
const dataset = "migration";
export const sanityURL = `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`;
export const jsChileURL = `https://graphql-api.jsconfcl.workers.dev/graphql`;
export const localSchema = `./src/gql/schema.gql`;
export const sanityDocuments = [
  "src/**/*.gql",
  "app/**/*.gql",
  "!src/features/import/**/*.gql",
];
export const apiDocuments = ["src/features/import/**/*.gql"];
const config: IGraphQLConfig = {
  schema: [sanityURL, jsChileURL, localSchema],
  documents: [...sanityDocuments, ...apiDocuments],
};

export default config;
