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
<<<<<<< HEAD

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
                  <Route path={Paths.USER_LIST} element={<Users />} />
                </Routes>
              </Layout>
            </ThemeProvider>
          </GraphqlProvider>
        </Router>
      </AuthProvider>
    </SettingsProvider>
=======
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
>>>>>>> 0b1a9df81f1581a1b8988ecb0c36e47300cf8107
  );
};
