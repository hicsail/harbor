import React, { FC } from 'react';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import { Paths } from '@constants/paths';
import { onError } from '@apollo/client/link/error';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/auth.context';

export interface GraphqlProviderProps {
  children: React.ReactNode;
}

export const GraphqlProvider: FC<GraphqlProviderProps> = ({ children }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const errorLink = onError(({ graphQLErrors }) => {
    graphQLErrors?.map((error: any) => {
      if (error.status === 401) {
        return navigate(Paths.LOGIN);
      }
      if (error.status === 403) {
        return navigate(Paths.PERMISSION_REQUIRED, { replace: true });
      }
    });
  });

  const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GATEWAY_URL || 'https://harbor-gateway.sail.codes/graphql',
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache({
      resultCaching: true
    }),
    link: from([errorLink, httpLink]),
    defaultOptions: {
      query: {
        errorPolicy: 'ignore',
        returnPartialData: true
      }
    }
  });
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
