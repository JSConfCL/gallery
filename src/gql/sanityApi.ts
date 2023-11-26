import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphqlRequest";
import { sanityApiVersion, sanityDataset, sanityProjectId } from "../lib/env";

const isProd = process.env.APP_ENV === "production";

const endpoint = `https://${sanityProjectId}.${
  isProd ? "api" : "apicdn"
}.sanity.io/${sanityApiVersion}/graphql/${sanityDataset}/default`;

export const API = getSdk(
  new GraphQLClient(endpoint, {
    fetch,
  }),
);
