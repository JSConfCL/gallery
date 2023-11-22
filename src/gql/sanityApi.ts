import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphqlRequest";

const endpoint = `https://${
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ""
}.api.sanity.io/v2023-08-01/graphql/${
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? ""
}/default${
  process.env.APP_ENV === "production"
    ? ""
    : "?perspective=previewDrafts"
}`;

export const API = getSdk(new GraphQLClient(endpoint, {
  fetch,
}));
