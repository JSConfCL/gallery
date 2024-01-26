import type { IGraphQLConfig } from "graphql-config";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

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
