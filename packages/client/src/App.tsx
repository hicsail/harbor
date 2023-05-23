import { FC } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { Layout } from '@layouts/layout';
import { SettingsProvider } from '@context/settings.context';
import { AuthProvider } from '@context/auth.context';
import { GraphqlProvider } from '@graphql/graphql-provider';

export const App: FC = () => {
  return (
    <SettingsProvider>
      <AuthProvider>
        <GraphqlProvider>
          <ThemeProvider>
            <Layout>
              <></>
            </Layout>
          </ThemeProvider>
        </GraphqlProvider>
      </AuthProvider>
    </SettingsProvider>
  );
};
