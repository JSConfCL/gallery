/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: string; output: string; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string; }
};

export type Block = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  children: Maybe<Array<Maybe<Span>>>;
  list: Maybe<Scalars['String']['output']>;
  style: Maybe<Scalars['String']['output']>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is defined. */
  is_defined: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['Boolean']['input']>;
};

export type CrossDatasetReference = {
  _dataset: Maybe<Scalars['String']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  _projectId: Maybe<Scalars['String']['output']>;
  _ref: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  _weak: Maybe<Scalars['Boolean']['output']>;
};

export type CrossDatasetReferenceFilter = {
  _dataset: InputMaybe<StringFilter>;
  _key: InputMaybe<StringFilter>;
  _projectId: InputMaybe<StringFilter>;
  _ref: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  _weak: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _projectId: InputMaybe<SortOrder>;
  _ref: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _weak: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than the given input. */
  gt: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is defined. */
  is_defined: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['Date']['input']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than the given input. */
  gt: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is defined. */
  is_defined: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['DateTime']['input']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _: InputMaybe<Sanity_DocumentFilter>;
  _createdAt: InputMaybe<DatetimeFilter>;
  _id: InputMaybe<IdFilter>;
  _rev: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  _updatedAt: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
};

export type Donor = Document & {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  discordUsername: Maybe<Scalars['String']['output']>;
  githubUsername: Maybe<Scalars['String']['output']>;
  /** El nombre q se usará en el sitio público para identificar al donante */
  name: Maybe<Scalars['String']['output']>;
  profileImage: Maybe<Image>;
  status: Maybe<Status>;
};

export type DonorFilter = {
  /** Apply filters on document level */
  _: InputMaybe<Sanity_DocumentFilter>;
  _createdAt: InputMaybe<DatetimeFilter>;
  _id: InputMaybe<IdFilter>;
  _key: InputMaybe<StringFilter>;
  _rev: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  _updatedAt: InputMaybe<DatetimeFilter>;
  discordUsername: InputMaybe<StringFilter>;
  githubUsername: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  profileImage: InputMaybe<ImageFilter>;
  status: InputMaybe<StatusFilter>;
};

export type DonorSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  discordUsername: InputMaybe<SortOrder>;
  githubUsername: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  profileImage: InputMaybe<ImageSorting>;
};

export type EventImage = Document & {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  eventType: Maybe<EventType>;
  externalId: Maybe<Scalars['String']['output']>;
  externalURL: Maybe<Scalars['String']['output']>;
  image: Maybe<Image>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type EventImageFilter = {
  /** Apply filters on document level */
  _: InputMaybe<Sanity_DocumentFilter>;
  _createdAt: InputMaybe<DatetimeFilter>;
  _id: InputMaybe<IdFilter>;
  _key: InputMaybe<StringFilter>;
  _rev: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  _updatedAt: InputMaybe<DatetimeFilter>;
  eventType: InputMaybe<EventTypeFilter>;
  externalId: InputMaybe<StringFilter>;
  externalURL: InputMaybe<StringFilter>;
  image: InputMaybe<ImageFilter>;
  title: InputMaybe<StringFilter>;
  url: InputMaybe<StringFilter>;
};

export type EventImageSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  externalId: InputMaybe<SortOrder>;
  externalURL: InputMaybe<SortOrder>;
  image: InputMaybe<ImageSorting>;
  title: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
};

export type EventInstance = Document & {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  bgColor: Maybe<Scalars['String']['output']>;
  endDate: Maybe<Scalars['Date']['output']>;
  eventType: Maybe<EventType>;
  image: Maybe<Image>;
  mergedTitle: Maybe<Scalars['Boolean']['output']>;
  startDate: Maybe<Scalars['Date']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type EventInstanceFilter = {
  /** Apply filters on document level */
  _: InputMaybe<Sanity_DocumentFilter>;
  _createdAt: InputMaybe<DatetimeFilter>;
  _id: InputMaybe<IdFilter>;
  _key: InputMaybe<StringFilter>;
  _rev: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  _updatedAt: InputMaybe<DatetimeFilter>;
  bgColor: InputMaybe<StringFilter>;
  endDate: InputMaybe<DateFilter>;
  eventType: InputMaybe<EventTypeFilter>;
  image: InputMaybe<ImageFilter>;
  mergedTitle: InputMaybe<BooleanFilter>;
  startDate: InputMaybe<DateFilter>;
  title: InputMaybe<StringFilter>;
  url: InputMaybe<StringFilter>;
};

export type EventInstanceSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  bgColor: InputMaybe<SortOrder>;
  endDate: InputMaybe<SortOrder>;
  image: InputMaybe<ImageSorting>;
  mergedTitle: InputMaybe<SortOrder>;
  startDate: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
};

export type EventType = Document & {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  bgColor: Maybe<Scalars['String']['output']>;
  image: Maybe<Image>;
  title: Maybe<Scalars['String']['output']>;
};

export type EventTypeFilter = {
  /** Apply filters on document level */
  _: InputMaybe<Sanity_DocumentFilter>;
  _createdAt: InputMaybe<DatetimeFilter>;
  _id: InputMaybe<IdFilter>;
  _key: InputMaybe<StringFilter>;
  _rev: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  _updatedAt: InputMaybe<DatetimeFilter>;
  bgColor: InputMaybe<StringFilter>;
  image: InputMaybe<ImageFilter>;
  title: InputMaybe<StringFilter>;
};

export type EventTypeSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  bgColor: InputMaybe<SortOrder>;
  image: InputMaybe<ImageSorting>;
  title: InputMaybe<SortOrder>;
};

export type File = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  asset: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  asset: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than the given input. */
  gt: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is defined. */
  is_defined: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['Float']['input']>;
};

export type Geopoint = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  alt: Maybe<Scalars['Float']['output']>;
  lat: Maybe<Scalars['Float']['output']>;
  lng: Maybe<Scalars['Float']['output']>;
};

export type GeopointFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  alt: InputMaybe<FloatFilter>;
  lat: InputMaybe<FloatFilter>;
  lng: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  alt: InputMaybe<SortOrder>;
  lat: InputMaybe<SortOrder>;
  lng: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['ID']['input']>;
  in: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Checks if the value matches the given word/words. */
  matches: InputMaybe<Scalars['ID']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['ID']['input']>;
  nin: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Image = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  asset: Maybe<SanityImageAsset>;
  crop: Maybe<SanityImageCrop>;
  hotspot: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  asset: InputMaybe<SanityImageAssetFilter>;
  crop: InputMaybe<SanityImageCropFilter>;
  hotspot: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  crop: InputMaybe<SanityImageCropSorting>;
  hotspot: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than the given input. */
  gt: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is defined. */
  is_defined: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['Int']['input']>;
};

export type RootQuery = {
  Document: Maybe<Document>;
  Donor: Maybe<Donor>;
  EventImage: Maybe<EventImage>;
  EventInstance: Maybe<EventInstance>;
  EventType: Maybe<EventType>;
  SanityFileAsset: Maybe<SanityFileAsset>;
  SanityImageAsset: Maybe<SanityImageAsset>;
  Status: Maybe<Status>;
  allDocument: Array<Document>;
  allDonor: Array<Donor>;
  allEventImage: Array<EventImage>;
  allEventInstance: Array<EventInstance>;
  allEventType: Array<EventType>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allStatus: Array<Status>;
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryDonorArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryEventImageArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryEventInstanceArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryEventTypeArgs = {
  id: Scalars['ID']['input'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']['input'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryStatusArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryAllDocumentArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Array<DocumentSorting>>;
  where: InputMaybe<DocumentFilter>;
};


export type RootQueryAllDonorArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Array<DonorSorting>>;
  where: InputMaybe<DonorFilter>;
};


export type RootQueryAllEventImageArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Array<EventImageSorting>>;
  where: InputMaybe<EventImageFilter>;
};


export type RootQueryAllEventInstanceArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Array<EventInstanceSorting>>;
  where: InputMaybe<EventInstanceFilter>;
};


export type RootQueryAllEventTypeArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Array<EventTypeSorting>>;
  where: InputMaybe<EventTypeFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Array<SanityFileAssetSorting>>;
  where: InputMaybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Array<SanityImageAssetSorting>>;
  where: InputMaybe<SanityImageAssetFilter>;
};


export type RootQueryAllStatusArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Array<StatusSorting>>;
  where: InputMaybe<StatusFilter>;
};

export type SanityAssetSourceData = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id: Maybe<Scalars['String']['output']>;
  /** A canonical name for the source this asset is originating from */
  name: Maybe<Scalars['String']['output']>;
  /** A URL to find more information about this asset in the originating source */
  url: Maybe<Scalars['String']['output']>;
};

export type SanityAssetSourceDataFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  url: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  assetId: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  extension: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  originalFilename: Maybe<Scalars['String']['output']>;
  path: Maybe<Scalars['String']['output']>;
  sha1hash: Maybe<Scalars['String']['output']>;
  size: Maybe<Scalars['Float']['output']>;
  source: Maybe<SanityAssetSourceData>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _: InputMaybe<Sanity_DocumentFilter>;
  _createdAt: InputMaybe<DatetimeFilter>;
  _id: InputMaybe<IdFilter>;
  _key: InputMaybe<StringFilter>;
  _rev: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  _updatedAt: InputMaybe<DatetimeFilter>;
  altText: InputMaybe<StringFilter>;
  assetId: InputMaybe<StringFilter>;
  description: InputMaybe<StringFilter>;
  extension: InputMaybe<StringFilter>;
  label: InputMaybe<StringFilter>;
  mimeType: InputMaybe<StringFilter>;
  originalFilename: InputMaybe<StringFilter>;
  path: InputMaybe<StringFilter>;
  sha1hash: InputMaybe<StringFilter>;
  size: InputMaybe<FloatFilter>;
  source: InputMaybe<SanityAssetSourceDataFilter>;
  title: InputMaybe<StringFilter>;
  url: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  altText: InputMaybe<SortOrder>;
  assetId: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  extension: InputMaybe<SortOrder>;
  label: InputMaybe<SortOrder>;
  mimeType: InputMaybe<SortOrder>;
  originalFilename: InputMaybe<SortOrder>;
  path: InputMaybe<SortOrder>;
  sha1hash: InputMaybe<SortOrder>;
  size: InputMaybe<SortOrder>;
  source: InputMaybe<SanityAssetSourceDataSorting>;
  title: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  assetId: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  extension: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
  metadata: Maybe<SanityImageMetadata>;
  mimeType: Maybe<Scalars['String']['output']>;
  originalFilename: Maybe<Scalars['String']['output']>;
  path: Maybe<Scalars['String']['output']>;
  sha1hash: Maybe<Scalars['String']['output']>;
  size: Maybe<Scalars['Float']['output']>;
  source: Maybe<SanityAssetSourceData>;
  title: Maybe<Scalars['String']['output']>;
  uploadId: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _: InputMaybe<Sanity_DocumentFilter>;
  _createdAt: InputMaybe<DatetimeFilter>;
  _id: InputMaybe<IdFilter>;
  _key: InputMaybe<StringFilter>;
  _rev: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  _updatedAt: InputMaybe<DatetimeFilter>;
  altText: InputMaybe<StringFilter>;
  assetId: InputMaybe<StringFilter>;
  description: InputMaybe<StringFilter>;
  extension: InputMaybe<StringFilter>;
  label: InputMaybe<StringFilter>;
  metadata: InputMaybe<SanityImageMetadataFilter>;
  mimeType: InputMaybe<StringFilter>;
  originalFilename: InputMaybe<StringFilter>;
  path: InputMaybe<StringFilter>;
  sha1hash: InputMaybe<StringFilter>;
  size: InputMaybe<FloatFilter>;
  source: InputMaybe<SanityAssetSourceDataFilter>;
  title: InputMaybe<StringFilter>;
  uploadId: InputMaybe<StringFilter>;
  url: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  altText: InputMaybe<SortOrder>;
  assetId: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  extension: InputMaybe<SortOrder>;
  label: InputMaybe<SortOrder>;
  metadata: InputMaybe<SanityImageMetadataSorting>;
  mimeType: InputMaybe<SortOrder>;
  originalFilename: InputMaybe<SortOrder>;
  path: InputMaybe<SortOrder>;
  sha1hash: InputMaybe<SortOrder>;
  size: InputMaybe<SortOrder>;
  source: InputMaybe<SanityAssetSourceDataSorting>;
  title: InputMaybe<SortOrder>;
  uploadId: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  bottom: Maybe<Scalars['Float']['output']>;
  left: Maybe<Scalars['Float']['output']>;
  right: Maybe<Scalars['Float']['output']>;
  top: Maybe<Scalars['Float']['output']>;
};

export type SanityImageCropFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  bottom: InputMaybe<FloatFilter>;
  left: InputMaybe<FloatFilter>;
  right: InputMaybe<FloatFilter>;
  top: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  bottom: InputMaybe<SortOrder>;
  left: InputMaybe<SortOrder>;
  right: InputMaybe<SortOrder>;
  top: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  aspectRatio: Maybe<Scalars['Float']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  width: Maybe<Scalars['Float']['output']>;
};

export type SanityImageDimensionsFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  aspectRatio: InputMaybe<FloatFilter>;
  height: InputMaybe<FloatFilter>;
  width: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  aspectRatio: InputMaybe<SortOrder>;
  height: InputMaybe<SortOrder>;
  width: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  width: Maybe<Scalars['Float']['output']>;
  x: Maybe<Scalars['Float']['output']>;
  y: Maybe<Scalars['Float']['output']>;
};

export type SanityImageHotspotFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  height: InputMaybe<FloatFilter>;
  width: InputMaybe<FloatFilter>;
  x: InputMaybe<FloatFilter>;
  y: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  height: InputMaybe<SortOrder>;
  width: InputMaybe<SortOrder>;
  x: InputMaybe<SortOrder>;
  y: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  blurHash: Maybe<Scalars['String']['output']>;
  dimensions: Maybe<SanityImageDimensions>;
  hasAlpha: Maybe<Scalars['Boolean']['output']>;
  isOpaque: Maybe<Scalars['Boolean']['output']>;
  location: Maybe<Geopoint>;
  lqip: Maybe<Scalars['String']['output']>;
  palette: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  blurHash: InputMaybe<StringFilter>;
  dimensions: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha: InputMaybe<BooleanFilter>;
  isOpaque: InputMaybe<BooleanFilter>;
  location: InputMaybe<GeopointFilter>;
  lqip: InputMaybe<StringFilter>;
  palette: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  blurHash: InputMaybe<SortOrder>;
  dimensions: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha: InputMaybe<SortOrder>;
  isOpaque: InputMaybe<SortOrder>;
  location: InputMaybe<GeopointSorting>;
  lqip: InputMaybe<SortOrder>;
  palette: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  darkMuted: Maybe<SanityImagePaletteSwatch>;
  darkVibrant: Maybe<SanityImagePaletteSwatch>;
  dominant: Maybe<SanityImagePaletteSwatch>;
  lightMuted: Maybe<SanityImagePaletteSwatch>;
  lightVibrant: Maybe<SanityImagePaletteSwatch>;
  muted: Maybe<SanityImagePaletteSwatch>;
  vibrant: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  darkMuted: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  darkMuted: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  background: Maybe<Scalars['String']['output']>;
  foreground: Maybe<Scalars['String']['output']>;
  population: Maybe<Scalars['Float']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  background: InputMaybe<StringFilter>;
  foreground: InputMaybe<StringFilter>;
  population: InputMaybe<FloatFilter>;
  title: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  background: InputMaybe<SortOrder>;
  foreground: InputMaybe<SortOrder>;
  population: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft: InputMaybe<Scalars['Boolean']['input']>;
  /** All documents referencing the given document ID. */
  references: InputMaybe<Scalars['ID']['input']>;
};

export type Slug = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  current: Maybe<Scalars['String']['output']>;
  source: Maybe<Scalars['String']['output']>;
};

export type SlugFilter = {
  _key: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  current: InputMaybe<StringFilter>;
  source: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  current: InputMaybe<SortOrder>;
  source: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  marks: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text: Maybe<Scalars['String']['output']>;
};

export type Status = Document & {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  key: Maybe<Slug>;
  /** Descriptive name of the status */
  statusName: Maybe<Scalars['String']['output']>;
};

export type StatusFilter = {
  /** Apply filters on document level */
  _: InputMaybe<Sanity_DocumentFilter>;
  _createdAt: InputMaybe<DatetimeFilter>;
  _id: InputMaybe<IdFilter>;
  _key: InputMaybe<StringFilter>;
  _rev: InputMaybe<StringFilter>;
  _type: InputMaybe<StringFilter>;
  _updatedAt: InputMaybe<DatetimeFilter>;
  key: InputMaybe<SlugFilter>;
  statusName: InputMaybe<StringFilter>;
};

export type StatusSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  key: InputMaybe<SlugSorting>;
  statusName: InputMaybe<SortOrder>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value is defined. */
  is_defined: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value matches the given word/words. */
  matches: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['String']['input']>;
  nin: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AllEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEventsQuery = { allEventInstance: Array<{ _id: string | null, title: string | null, startDate: string | null, endDate: string | null, url: string | null, bgColor: string | null, mergedTitle: boolean | null, image: { asset: { _id: string | null, assetId: string | null } | null } | null, eventType: { title: string | null, bgColor: string | null, image: { asset: { _id: string | null, assetId: string | null } | null } | null } | null }> };


export const AllEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allEventInstance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"mergedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllEventsQuery, AllEventsQueryVariables>;