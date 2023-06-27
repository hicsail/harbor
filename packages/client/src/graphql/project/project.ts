/* Generated File DO NOT EDIT. */
/* tslint:disable */
import * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetProjectQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetProjectQuery = {
  __typename?: 'Query';
  getProject: {
    __typename?: 'ProjectModel';
    id: string;
    name: string;
    description?: string | null;
    logo?: string | null;
    muiTheme: any;
    homePage?: string | null;
    redirectUrl?: string | null;
    createdAt: any;
    updatedAt: any;
    deletedAt?: any | null;
    settings: { __typename?: 'ProjectSettingsModel'; allowSignup: boolean; displayProjectName: boolean };
    authMethods: { __typename?: 'ProjectAuthMethodsModel'; emailAuth: boolean; googleAuth: boolean };
  };
};

export type ListProjectsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ListProjectsQuery = {
  __typename?: 'Query';
  listProjects: Array<{ __typename?: 'ProjectModel'; id: string; name: string; description?: string | null; logo?: string | null }>;
};

export const GetProjectDocument = gql`
  query getProject($id: String!) {
    getProject(id: $id) {
      id
      name
      description
      logo
      muiTheme
      homePage
      redirectUrl
      createdAt
      updatedAt
      deletedAt
      settings {
        allowSignup
        displayProjectName
      }
      authMethods {
        emailAuth
        googleAuth
      }
    }
  }
`;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions: Apollo.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
}
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
}
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export const ListProjectsDocument = gql`
  query listProjects {
    listProjects {
      id
      name
      description
      logo
    }
  }
`;

/**
 * __useListProjectsQuery__
 *
 * To run a query within a React component, call `useListProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ListProjectsQuery, ListProjectsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ListProjectsQuery, ListProjectsQueryVariables>(ListProjectsDocument, options);
}
export function useListProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProjectsQuery, ListProjectsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ListProjectsQuery, ListProjectsQueryVariables>(ListProjectsDocument, options);
}
export type ListProjectsQueryHookResult = ReturnType<typeof useListProjectsQuery>;
export type ListProjectsLazyQueryHookResult = ReturnType<typeof useListProjectsLazyQuery>;
export type ListProjectsQueryResult = Apollo.QueryResult<ListProjectsQuery, ListProjectsQueryVariables>;
