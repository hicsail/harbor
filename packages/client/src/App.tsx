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
import { Login } from '@pages/login';
import { Logout } from '@pages/logout';
import { PermissionRequired } from '@pages/permission-required';
import { Error } from '@pages/error';
import { Maintenance } from '@pages/maintenance';
import { Page404 } from '@pages/404';
import { ProjectList } from '@pages/project-list';

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
                    <Route path={Paths.PROJECT_LIST} element={<ProjectList />} />
                  </Route>
                  <Route path={Paths.AUTH_CALLBACK} element={<Callback />} />
                  <Route path={Paths.LOGIN} element={<Login />} />
                  <Route path={Paths.LOGOUT} element={<Logout />} />
                  <Route path={Paths.PERMISSION_REQUIRED} element={<PermissionRequired />} />
                  <Route path={Paths.ERROR} element={<Error />} />
                  <Route path={Paths.MAINTENANCE} element={<Maintenance />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </ThemeProvider>
            </ProjectProvider>
          </GraphqlProvider>
        </Router>
      </AuthProvider>
    </SettingsProvider>
  );
};
