/* Generated File DO NOT EDIT. */
/* tslint:disable */
import * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetInvitesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetInvitesQuery = {
  __typename?: 'Query';
  invites: Array<{
    __typename?: 'InviteModel';
    id: string;
    email: string;
    role: number;
    expiresAt: any;
    createdAt: any;
    updatedAt: any;
    deletedAt?: any | null;
    status: Types.InviteStatus;
  }>;
};

export type GetInviteQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type GetInviteQuery = {
  __typename?: 'Query';
  invite: { __typename?: 'InviteModel'; email: string; role: number; expiresAt: any; createdAt: any; updatedAt: any; deletedAt?: any | null; status: Types.InviteStatus };
};

export type CreateInviteMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  role?: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type CreateInviteMutation = {
  __typename?: 'Mutation';
  createInvite: { __typename?: 'InviteModel'; email: string; role: number; expiresAt: any; createdAt: any; updatedAt: any; deletedAt?: any | null; status: Types.InviteStatus };
};

export type CancelInviteMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type CancelInviteMutation = {
  __typename?: 'Mutation';
  cancelInvite: { __typename?: 'InviteModel'; email: string; role: number; expiresAt: any; createdAt: any; updatedAt: any; deletedAt?: any | null; status: Types.InviteStatus };
};

export const GetInvitesDocument = gql`
  query getInvites {
    invites {
      id
      email
      role
      expiresAt
      createdAt
      updatedAt
      deletedAt
      status
    }
  }
`;

/**
 * __useGetInvitesQuery__
 *
 * To run a query within a React component, call `useGetInvitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvitesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInvitesQuery(baseOptions?: Apollo.QueryHookOptions<GetInvitesQuery, GetInvitesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetInvitesQuery, GetInvitesQueryVariables>(GetInvitesDocument, options);
}
export function useGetInvitesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInvitesQuery, GetInvitesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetInvitesQuery, GetInvitesQueryVariables>(GetInvitesDocument, options);
}
export type GetInvitesQueryHookResult = ReturnType<typeof useGetInvitesQuery>;
export type GetInvitesLazyQueryHookResult = ReturnType<typeof useGetInvitesLazyQuery>;
export type GetInvitesQueryResult = Apollo.QueryResult<GetInvitesQuery, GetInvitesQueryVariables>;
export const GetInviteDocument = gql`
  query getInvite($id: ID!) {
    invite(id: $id) {
      email
      role
      expiresAt
      createdAt
      updatedAt
      deletedAt
      status
    }
  }
`;

/**
 * __useGetInviteQuery__
 *
 * To run a query within a React component, call `useGetInviteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInviteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInviteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInviteQuery(baseOptions: Apollo.QueryHookOptions<GetInviteQuery, GetInviteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetInviteQuery, GetInviteQueryVariables>(GetInviteDocument, options);
}
export function useGetInviteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInviteQuery, GetInviteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetInviteQuery, GetInviteQueryVariables>(GetInviteDocument, options);
}
export type GetInviteQueryHookResult = ReturnType<typeof useGetInviteQuery>;
export type GetInviteLazyQueryHookResult = ReturnType<typeof useGetInviteLazyQuery>;
export type GetInviteQueryResult = Apollo.QueryResult<GetInviteQuery, GetInviteQueryVariables>;
export const CreateInviteDocument = gql`
  mutation createInvite($email: String!, $role: Int) {
    createInvite(email: $email, role: $role) {
      email
      role
      expiresAt
      createdAt
      updatedAt
      deletedAt
      status
    }
  }
`;
export type CreateInviteMutationFn = Apollo.MutationFunction<CreateInviteMutation, CreateInviteMutationVariables>;

/**
 * __useCreateInviteMutation__
 *
 * To run a mutation, you first call `useCreateInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInviteMutation, { data, loading, error }] = useCreateInviteMutation({
 *   variables: {
 *      email: // value for 'email'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useCreateInviteMutation(baseOptions?: Apollo.MutationHookOptions<CreateInviteMutation, CreateInviteMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateInviteMutation, CreateInviteMutationVariables>(CreateInviteDocument, options);
}
export type CreateInviteMutationHookResult = ReturnType<typeof useCreateInviteMutation>;
export type CreateInviteMutationResult = Apollo.MutationResult<CreateInviteMutation>;
export type CreateInviteMutationOptions = Apollo.BaseMutationOptions<CreateInviteMutation, CreateInviteMutationVariables>;
export const CancelInviteDocument = gql`
  mutation cancelInvite($id: ID!) {
    cancelInvite(id: $id) {
      email
      role
      expiresAt
      createdAt
      updatedAt
      deletedAt
      status
    }
  }
`;
export type CancelInviteMutationFn = Apollo.MutationFunction<CancelInviteMutation, CancelInviteMutationVariables>;

/**
 * __useCancelInviteMutation__
 *
 * To run a mutation, you first call `useCancelInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelInviteMutation, { data, loading, error }] = useCancelInviteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCancelInviteMutation(baseOptions?: Apollo.MutationHookOptions<CancelInviteMutation, CancelInviteMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CancelInviteMutation, CancelInviteMutationVariables>(CancelInviteDocument, options);
}
export type CancelInviteMutationHookResult = ReturnType<typeof useCancelInviteMutation>;
export type CancelInviteMutationResult = Apollo.MutationResult<CancelInviteMutation>;
export type CancelInviteMutationOptions = Apollo.BaseMutationOptions<CancelInviteMutation, CancelInviteMutationVariables>;
