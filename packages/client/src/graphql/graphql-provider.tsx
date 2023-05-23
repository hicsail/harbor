import React, { FC, useEffect } from 'react';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import { useSettings } from '@context/settings.context';
import { LoadingScreen } from '@components/loading-screen';

export interface GraphqlProviderProps {
  children: React.ReactNode;
}

export const GraphqlProvider: FC<GraphqlProviderProps> = ({ children }) => {
  const { settings } = useSettings();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [httpLink, setHttpLink] = React.useState<HttpLink>();

  useEffect(() => {
    if (settings?.VITE_GATEWAY_URL) {
      setHttpLink(
        new HttpLink({
          uri: settings.VITE_GATEWAY_URL,
          fetch: fetch,
          headers: {
            authorization: `Bearer ${token}`
          }
        })
      );
    }
  }, [settings]);

  if (!httpLink) {
    return <LoadingScreen />;
  }

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
