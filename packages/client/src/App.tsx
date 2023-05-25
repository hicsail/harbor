import { FC } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { Layout } from '@layouts/layout';
import { SettingsProvider } from '@context/settings.context';
import { AuthProvider } from '@context/auth.context';
import { GraphqlProvider } from '@graphql/graphql-provider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/home';
import { Callback } from '@pages/callback';
import { Paths } from '@constants/paths';

export const App: FC = () => {
  return (
    <SettingsProvider>
      <AuthProvider>
        <Router>
          <GraphqlProvider>
            <ThemeProvider>
              <Layout>
                <Routes>
                  <Route path={Paths.HOME} element={<Home />} />
                  <Route path={Paths.AUTH_CALLBACK} element={<Callback />} />
                </Routes>
              </Layout>
            </ThemeProvider>
          </GraphqlProvider>
        </Router>
      </AuthProvider>
    </SettingsProvider>
  );
};
