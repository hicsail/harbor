import { FC } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { Layout } from '@layouts/layout';
import { SettingsProvider } from '@context/settings.context';
import { AuthProvider } from '@context/auth.context';
import { GraphqlProvider } from '@graphql/graphql-provider';
import { ProjectProvider } from '@context/project.context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/home';
import { Callback } from '@pages/callback';
import { Paths } from '@constants/paths';
import { Users } from '@pages/users';
import { Invite } from '@pages/invite';
import { AuthLayout } from '@layouts/auth-layout';

export const App: FC = () => {
  return (
    <Router>
      <SettingsProvider>
        <ThemeProvider>
          <AuthProvider>
            <GraphqlProvider>
              <ProjectProvider>
                <Routes>
                  <Route element={<Layout />}>
                    <Route path={Paths.HOME} element={<Home />} />
                    <Route element={<AuthLayout />}>
                      <Route path={Paths.USER_LIST} element={<Users />} />
                      <Route path={Paths.INVITE} element={<Invite />} />
                    </Route>
                  </Route>
                  <Route path={Paths.AUTH_CALLBACK} element={<Callback />} />
                </Routes>
              </ProjectProvider>
            </GraphqlProvider>
          </AuthProvider>
        </ThemeProvider>
      </SettingsProvider>
    </Router>
  );
};
