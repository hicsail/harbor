import { FC } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { Layout } from '@layouts/layout';
import { SettingsProvider } from '@context/settings.context';

export const App: FC = () => {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <Layout>
          <></>
        </Layout>
      </ThemeProvider>
    </SettingsProvider>
  );
};
