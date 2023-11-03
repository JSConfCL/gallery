import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphqlRequest";

const endpoint = `https://${
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ""
}.api.sanity.io/v1/graphql/${
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? ""
}/default`;

export const API = getSdk(new GraphQLClient(endpoint));
