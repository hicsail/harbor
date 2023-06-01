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
<<<<<<< HEAD
      <Toolbar sx={{ justifyContent: 'end' }}>
        <Typography>Harbor</Typography>
=======
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Harbor
        </Typography>
>>>>>>> 0b1a9df81f1581a1b8988ecb0c36e47300cf8107
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDarkMode}>
          {settings.theme === 'light' && <DarkMode color="info" />}
          {settings.theme === 'dark' && <LightMode color="warning" />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
