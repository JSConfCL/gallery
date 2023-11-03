/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated. Please do not modify it manually. */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
};

/** Representation of a workEmail */
export type AllowedCurrency = {
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export enum CommnunityStatus {
  Active = 'active',
  Inactive = 'inactive'
}

/** Representation of a Community */
export type Community = {
  description: Maybe<Scalars['String']['output']>;
  events: Array<Event>;
  id: Scalars['String']['output'];
  name: Maybe<Scalars['String']['output']>;
  status: CommnunityStatus;
  users: Array<User>;
};

export type CommunityCreateInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

/** Representation of a workEmail */
export type Company = {
  description: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  hasBeenUpdated: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  logo: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  salarySubmissions: Scalars['Int']['output'];
  /** Not available to users */
  status: Maybe<CompanyStatus>;
  website: Maybe<Scalars['String']['output']>;
};

export enum CompanyStatus {
  Active = 'active',
  Draft = 'draft',
  Inactive = 'inactive'
}

export type CreateCompanyInput = {
  description: InputMaybe<Scalars['String']['input']>;
  /** The email domain of the company (What we'll use to match the company to the user on account-creation) */
  domain: Scalars['String']['input'];
  logo: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<CompanyStatus>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type CreateSalaryInput = {
  amount: Scalars['Int']['input'];
  companyId: Scalars['String']['input'];
  confirmationToken: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  currencyId: Scalars['String']['input'];
  gender: Gender;
  genderOtherText: Scalars['String']['input'];
  typeOfEmployment: TypeOfEmployment;
  workMetodology: WorkMetodology;
  workRoleId: Scalars['String']['input'];
  yearsOfExperience: Scalars['Int']['input'];
};

/** Representation of an Event (Events and Users, is what tickets are linked to) */
export type Event = {
  address: Maybe<Scalars['String']['output']>;
  community: Maybe<Community>;
  description: Maybe<Scalars['String']['output']>;
  endDateTime: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  latitude: Maybe<Scalars['String']['output']>;
  longitude: Maybe<Scalars['String']['output']>;
  maxAttendees: Maybe<Scalars['Int']['output']>;
  meetingURL: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  startDateTime: Scalars['DateTime']['output'];
  status: EventStatus;
  tags: Array<Tag>;
  tickets: Array<UserTicket>;
  users: Array<User>;
  visibility: EventVisibility;
};


/** Representation of an Event (Events and Users, is what tickets are linked to) */
export type EventTicketsArgs = {
  input: InputMaybe<EventsTicketsSearchInput>;
};

export type EventCreateInput = {
  address: InputMaybe<Scalars['String']['input']>;
  communityId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  endDateTime: InputMaybe<Scalars['DateTime']['input']>;
  latitude: InputMaybe<Scalars['String']['input']>;
  longitude: InputMaybe<Scalars['String']['input']>;
  maxAttendees: Scalars['Int']['input'];
  meetingURL: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  startDateTime: Scalars['DateTime']['input'];
  status: InputMaybe<EventStatus>;
  timeZone: InputMaybe<Scalars['String']['input']>;
  visibility: InputMaybe<EventVisibility>;
};

export enum EventStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export enum EventVisibility {
  Private = 'private',
  Public = 'public',
  Unlisted = 'unlisted'
}

export type EventsSearchInput = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  startDateTimeFrom: InputMaybe<Scalars['DateTime']['input']>;
  startDateTimeTo: InputMaybe<Scalars['DateTime']['input']>;
  status: InputMaybe<EventStatus>;
  visibility: InputMaybe<EventVisibility>;
};

export type EventsTicketsSearchInput = {
  approvalStatus: InputMaybe<TicketApprovalStatus>;
  id: InputMaybe<Scalars['String']['input']>;
  paymentStatus: InputMaybe<TicketPaymentStatus>;
  redemptionStatus: InputMaybe<TicketRedemptionStatus>;
  status: InputMaybe<TicketStatus>;
};

export enum Gender {
  Agender = 'agender',
  Female = 'female',
  Genderfluid = 'genderfluid',
  Genderqueer = 'genderqueer',
  Male = 'male',
  NonBinary = 'non_binary',
  Other = 'other',
  PreferNotToSay = 'prefer_not_to_say',
  TransgenderFemale = 'transgender_female',
  TransgenderMale = 'transgender_male',
  TwoSpirit = 'two_spirit'
}

export type Mutation = {
  /** Approve a ticket */
  approvalUserTicket: UserTicket;
  /** Cancel a ticket */
  cancelUserTicket: UserTicket;
  /** Create an community */
  createCommunity: Community;
  /** Create a company */
  createCompany: Company;
  /** Create an event */
  createEvent: Event;
  /** Create a salary */
  createSalary: Salary;
  /** Edit a ticket */
  editTicket: Ticket;
  /** Redeem a ticket */
  redeemUserTicket: UserTicket;
  /** Kickoff the email validation flow. This flow will links an email to a user, create a company if it does not exist, and allows filling data for that email's position */
  startWorkEmailValidation: WorkEmail;
  /** Update a company */
  updateCompany: Company;
  /** Create a salary */
  updateSalary: Salary;
  /** Update a user */
  updateUser: User;
  /** Update a user role */
  updateUserRoleInCommunity: User;
  /** Validates work email for a user */
  validateWorkEmail: WorkEmail;
};


export type MutationApprovalUserTicketArgs = {
  userTicketId: Scalars['String']['input'];
};


export type MutationCancelUserTicketArgs = {
  userTicketId: Scalars['String']['input'];
};


export type MutationCreateCommunityArgs = {
  input: CommunityCreateInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationCreateEventArgs = {
  input: EventCreateInput;
};


export type MutationCreateSalaryArgs = {
  input: CreateSalaryInput;
};


export type MutationEditTicketArgs = {
  input: TicketEditInput;
};


export type MutationRedeemUserTicketArgs = {
  userTicketId: Scalars['String']['input'];
};


export type MutationStartWorkEmailValidationArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationUpdateSalaryArgs = {
  input: UpdateSalaryInput;
};


export type MutationUpdateUserArgs = {
  input: UserEditInput;
};


export type MutationUpdateUserRoleInCommunityArgs = {
  input: UpdateUserRoleInCommunityInput;
};


export type MutationValidateWorkEmailArgs = {
  confirmationToken: Scalars['String']['input'];
};

export type MyTicketsSearchInput = {
  approvalStatus: InputMaybe<TicketApprovalStatus>;
  eventId: InputMaybe<Scalars['String']['input']>;
  paymentStatus: InputMaybe<TicketPaymentStatus>;
  redemptionStatus: InputMaybe<TicketRedemptionStatus>;
  status: InputMaybe<TicketStatus>;
};

export type Query = {
  /** Get a list of communities. Filter by name, id, or status */
  communities: Array<Community>;
  /** Get a community by id */
  community: Maybe<Community>;
  /** Get all available companies */
  companies: Array<Company>;
  /** Get all available companies */
  company: Company;
  /** Get an event by id */
  event: Maybe<Event>;
  /** Get a list of events. Filter by name, id, status or date */
  events: Array<Event>;
  /** Get the current user */
  me: User;
  /** Get a list of tickets for the current user */
  myTickets: Array<UserTicket>;
  status: Scalars['String']['output'];
  /** Get a list of tags */
  tags: Array<Tag>;
  /** Get a list of users */
  users: Array<User>;
  /** Get a workEmail and check if its validated for this user */
  workEmail: WorkEmail;
};


export type QueryCommunitiesArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<CommnunityStatus>;
};


export type QueryCommunityArgs = {
  id: Scalars['String']['input'];
};


export type QueryCompaniesArgs = {
  input: InputMaybe<SearchCompaniesInput>;
};


export type QueryCompanyArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  input: InputMaybe<EventsSearchInput>;
};


export type QueryMyTicketsArgs = {
  input: InputMaybe<MyTicketsSearchInput>;
};


export type QueryStatusArgs = {
  name: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagsArgs = {
  input: InputMaybe<TagSearchInput>;
};


export type QueryWorkEmailArgs = {
  email: Scalars['String']['input'];
};

/** Representation of a workEmail */
export type Salary = {
  amount: Scalars['Int']['output'];
  company: Company;
  countryCode: Scalars['String']['output'];
  currency: AllowedCurrency;
  gender: Maybe<Gender>;
  genderOtherText: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  typeOfEmployment: TypeOfEmployment;
  workMetodology: WorkMetodology;
  workRole: WorkRole;
  yearsOfExperience: Scalars['Int']['output'];
};

export type SearchCompaniesInput = {
  companyName: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  domain: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['String']['input']>;
};

/** Representation of a tag. Tags can be associated to many things. An event, a community, etc. */
export type Tag = {
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

export type TagSearchInput = {
  description: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

/** Representation of a ticket */
export type Ticket = {
  currencyId: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  endDateTime: Maybe<Scalars['DateTime']['output']>;
  eventId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Maybe<Scalars['Int']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  requiresApproval: Maybe<Scalars['Boolean']['output']>;
  startDateTime: Scalars['DateTime']['output'];
  status: TicketTemplateStatus;
  visibility: TicketTemplateVisibility;
};

export enum TicketApprovalStatus {
  Approved = 'approved',
  Pending = 'pending'
}

export type TicketEditInput = {
  currencyId: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  endDateTime: InputMaybe<Scalars['DateTime']['input']>;
  eventId: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['Int']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  requiresApproval: InputMaybe<Scalars['Boolean']['input']>;
  startDateTime: InputMaybe<Scalars['DateTime']['input']>;
  status: InputMaybe<TicketTemplateStatus>;
  ticketId: Scalars['String']['input'];
  visibility: InputMaybe<TicketTemplateVisibility>;
};

export enum TicketPaymentStatus {
  Paid = 'paid',
  Unpaid = 'unpaid'
}

export enum TicketRedemptionStatus {
  Pending = 'pending',
  Redeemed = 'redeemed'
}

export enum TicketStatus {
  Active = 'active',
  Cancelled = 'cancelled'
}

export enum TicketTemplateStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export enum TicketTemplateVisibility {
  Private = 'private',
  Public = 'public',
  Unlisted = 'unlisted'
}

export enum TypeOfEmployment {
  Freelance = 'freelance',
  FullTime = 'fullTime',
  PartTime = 'partTime'
}

export type UpdateCompanyInput = {
  companyId: Scalars['String']['input'];
  description: InputMaybe<Scalars['String']['input']>;
  domain: InputMaybe<Scalars['String']['input']>;
  logo: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSalaryInput = {
  amount: Scalars['Int']['input'];
  companyId: Scalars['String']['input'];
  confirmationToken: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  currencyId: Scalars['String']['input'];
  gender: Gender;
  genderOtherText: Scalars['String']['input'];
  salaryId: Scalars['String']['input'];
  typeOfEmployment: TypeOfEmployment;
  workMetodology: WorkMetodology;
  workRoleId: Scalars['String']['input'];
  yearsOfExperience: Scalars['Int']['input'];
};

/** Representation of a user */
export type User = {
  bio: Maybe<Scalars['String']['output']>;
  communities: Array<Community>;
  id: Scalars['String']['output'];
  isSuperAdmin: Maybe<Scalars['Boolean']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

/** Representation of a User ticket */
export type UserTicket = {
  approvalStatus: TicketApprovalStatus;
  id: Scalars['ID']['output'];
  paymentStatus: TicketPaymentStatus;
  redemptionStatus: TicketRedemptionStatus;
  status: TicketStatus;
};

/** Representation of a workEmail */
export type WorkEmail = {
  id: Scalars['String']['output'];
  isValidated: Scalars['Boolean']['output'];
};

export enum WorkMetodology {
  Hybrid = 'hybrid',
  Office = 'office',
  Remote = 'remote'
}

/** Representation of a workEmail */
export type WorkRole = {
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  seniority: Scalars['String']['output'];
};

export type UpdateUserRoleInCommunityInput = {
  communityId: Scalars['String']['input'];
  role: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserEditInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type IsSuperAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type IsSuperAdminQuery = { me: { id: string, isSuperAdmin: boolean | null } };


export const IsSuperAdminDocument = gql`
    query isSuperAdmin {
  me {
    id
    isSuperAdmin
  }
}
    `;

/**
 * __useIsSuperAdminQuery__
 *
 * To run a query within a React component, call `useIsSuperAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsSuperAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsSuperAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsSuperAdminQuery(baseOptions?: Apollo.QueryHookOptions<IsSuperAdminQuery, IsSuperAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsSuperAdminQuery, IsSuperAdminQueryVariables>(IsSuperAdminDocument, options);
      }
export function useIsSuperAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsSuperAdminQuery, IsSuperAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsSuperAdminQuery, IsSuperAdminQueryVariables>(IsSuperAdminDocument, options);
        }
export function useIsSuperAdminSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsSuperAdminQuery, IsSuperAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsSuperAdminQuery, IsSuperAdminQueryVariables>(IsSuperAdminDocument, options);
        }
export type IsSuperAdminQueryHookResult = ReturnType<typeof useIsSuperAdminQuery>;
export type IsSuperAdminLazyQueryHookResult = ReturnType<typeof useIsSuperAdminLazyQuery>;
export type IsSuperAdminSuspenseQueryHookResult = ReturnType<typeof useIsSuperAdminSuspenseQuery>;
export type IsSuperAdminQueryResult = Apollo.QueryResult<IsSuperAdminQuery, IsSuperAdminQueryVariables>;