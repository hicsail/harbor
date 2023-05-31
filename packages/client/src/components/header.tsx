import { FC } from 'react';
import { useSettings } from '@context/settings.context';
import { DarkMode, LightMode } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export const Header: FC = () => {
  const { settings, setSettings } = useSettings();

  const toggleDarkMode = () => {
    setSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' });
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: 'end' }}>
        <Typography>Harbor</Typography>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDarkMode}>
          {settings.theme === 'light' && <DarkMode color="info" />}
          {settings.theme === 'dark' && <LightMode color="warning" />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
