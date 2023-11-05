/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated. Please do not modify it manually. */
import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import * as Operations from './graphql';




export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    allEvents(variables?: Operations.AllEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Operations.AllEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Operations.AllEventsQuery>(Operations.AllEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allEvents', 'query');
    },
    eventImages(variables: Operations.EventImagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Operations.EventImagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Operations.EventImagesQuery>(Operations.EventImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'eventImages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;