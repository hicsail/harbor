import { FC } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { Layout } from '@layouts/layout';
import { SettingsProvider } from '@context/settings.context';
import { AuthProvider } from '@context/auth.context';
import { GraphqlProvider } from '@graphql/graphql-provider';
import { ProjectProvider } from '@context/project.context';

export const App: FC = () => {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <AuthProvider>
          <GraphqlProvider>
            <ProjectProvider>
              <Layout>
                <></>
              </Layout>
            </ProjectProvider>
          </GraphqlProvider>
        </AuthProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
};
