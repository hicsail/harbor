import { FC } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { Layout } from '@layouts/layout';
import { SettingsProvider } from '@context/settings.context';
import { AuthProvider } from '@context/auth.context';
import { GraphqlProvider } from '@graphql/graphql-provider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Callback } from '@pages/callback';
import { Paths } from '@constants/paths';
import { Users } from '@pages/users';
import { Invite } from '@pages/invite';
import { AuthLayout } from '@layouts/auth-layout';
import { Project } from '@pages/project';
import { ProjectLayout } from '@layouts/project-layout';
import { Settings } from '@pages/settings';
import { AuthMethods } from '@pages/auth-methods';
import { Home } from '@pages/home';
import { ProjectProvider } from '@context/project.context';

export const App: FC = () => {
  return (
    <SettingsProvider>
      <AuthProvider>
        <Router>
          <GraphqlProvider>
            <ProjectProvider>
              <ThemeProvider>
                <Routes>
                  <Route element={<Layout />}>
                    <Route path={Paths.HOME} element={<Home />} />
                    <Route element={<AuthLayout />}>
                      <Route path={Paths.USER_LIST} element={<Users />} />
                      <Route path={Paths.INVITE} element={<Invite />} />
                    </Route>
                    <Route element={<ProjectLayout />}>
                      <Route path={Paths.PROJECT} element={<Project />} />
                      <Route path={Paths.SETTINGS} element={<Settings />} />
                      <Route path={Paths.AUTH_METHODS} element={<AuthMethods />} />
                    </Route>
                  </Route>
                  <Route path={Paths.AUTH_CALLBACK} element={<Callback />} />
                </Routes>
              </ThemeProvider>
            </ProjectProvider>
          </GraphqlProvider>
        </Router>
      </AuthProvider>
    </SettingsProvider>
  );
};
