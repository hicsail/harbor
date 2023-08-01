import { FC } from 'react';
import { useSettings } from '@context/settings.context';
import { DarkMode, LightMode } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useProject } from '@context/project.context';

export const Header: FC = () => {
  const { settings, setSettings } = useSettings();
  const { project } = useProject();

  const toggleDarkMode = () => {
    setSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' });
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {project?.name}
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDarkMode}>
          {settings.theme === 'light' && <DarkMode color="info" />}
          {settings.theme === 'dark' && <LightMode color="warning" />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
