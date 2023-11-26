/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query allEvents($where: EventInstanceFilter, $sort: [EventInstanceSorting!]) {\n  allEventInstance(where: $where, sort: $sort) {\n    _id\n    title\n    startDate\n    endDate\n    url\n    bgColor\n    mergedTitle\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n          blurHash\n        }\n        assetId\n      }\n    }\n    eventType {\n      title\n      bgColor\n      image {\n        asset {\n          _id\n          assetId\n          metadata {\n            lqip\n          }\n        }\n      }\n    }\n  }\n}": types.AllEventsDocument,
    "query eventImages($eventId: ID!, $where: EventImageFilter) {\n  EventInstance(id: $eventId) {\n    _id\n    title\n    startDate\n    endDate\n    mergedTitle\n    eventType {\n      _id\n      title\n      image {\n        asset {\n          _id\n          metadata {\n            lqip\n          }\n          assetId\n        }\n      }\n    }\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n        }\n        assetId\n      }\n    }\n  }\n  allEventImage(where: $where) {\n    _id\n    title\n    url\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n        }\n        assetId\n      }\n    }\n  }\n}": types.EventImagesDocument,
    "query singleEventImage($photoId: ID!) {\n  EventImage(id: $photoId) {\n    _id\n    title\n    url\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n          blurHash\n        }\n        assetId\n      }\n    }\n  }\n}": types.SingleEventImageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allEvents($where: EventInstanceFilter, $sort: [EventInstanceSorting!]) {\n  allEventInstance(where: $where, sort: $sort) {\n    _id\n    title\n    startDate\n    endDate\n    url\n    bgColor\n    mergedTitle\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n          blurHash\n        }\n        assetId\n      }\n    }\n    eventType {\n      title\n      bgColor\n      image {\n        asset {\n          _id\n          assetId\n          metadata {\n            lqip\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query allEvents($where: EventInstanceFilter, $sort: [EventInstanceSorting!]) {\n  allEventInstance(where: $where, sort: $sort) {\n    _id\n    title\n    startDate\n    endDate\n    url\n    bgColor\n    mergedTitle\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n          blurHash\n        }\n        assetId\n      }\n    }\n    eventType {\n      title\n      bgColor\n      image {\n        asset {\n          _id\n          assetId\n          metadata {\n            lqip\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query eventImages($eventId: ID!, $where: EventImageFilter) {\n  EventInstance(id: $eventId) {\n    _id\n    title\n    startDate\n    endDate\n    mergedTitle\n    eventType {\n      _id\n      title\n      image {\n        asset {\n          _id\n          metadata {\n            lqip\n          }\n          assetId\n        }\n      }\n    }\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n        }\n        assetId\n      }\n    }\n  }\n  allEventImage(where: $where) {\n    _id\n    title\n    url\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n        }\n        assetId\n      }\n    }\n  }\n}"): (typeof documents)["query eventImages($eventId: ID!, $where: EventImageFilter) {\n  EventInstance(id: $eventId) {\n    _id\n    title\n    startDate\n    endDate\n    mergedTitle\n    eventType {\n      _id\n      title\n      image {\n        asset {\n          _id\n          metadata {\n            lqip\n          }\n          assetId\n        }\n      }\n    }\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n        }\n        assetId\n      }\n    }\n  }\n  allEventImage(where: $where) {\n    _id\n    title\n    url\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n        }\n        assetId\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query singleEventImage($photoId: ID!) {\n  EventImage(id: $photoId) {\n    _id\n    title\n    url\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n          blurHash\n        }\n        assetId\n      }\n    }\n  }\n}"): (typeof documents)["query singleEventImage($photoId: ID!) {\n  EventImage(id: $photoId) {\n    _id\n    title\n    url\n    image {\n      asset {\n        _id\n        metadata {\n          lqip\n          blurHash\n        }\n        assetId\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;