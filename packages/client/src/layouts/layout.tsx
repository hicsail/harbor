import { DarkMode, GitHub, LightMode } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useSettings } from '@context/settings.context';
import { Link } from 'react-router-dom';
import { Paths } from '@constants/paths';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { settings, setSettings } = useSettings();

  const toggleDarkMode = () => {
    setSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' });
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };
  return (
    <Box
      sx={{
        minHeight: `100vh`
      }}
    >
      <AppBar elevation={0} color="transparent" position="sticky">
        <Toolbar sx={{ justifyContent: 'end' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDarkMode}>
            {settings.theme === 'light' && <DarkMode color="info" />}
            {settings.theme === 'dark' && <LightMode color="warning" />}
          </IconButton>
          <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
          <Drawer anchor={'top'} open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 'auto' }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
              <Box>
                <Link to={Paths.USER_LIST}>Add Users</Link>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
      {children}
      <Box
        component="footer"
        sx={{
          display: 'flex',
          zIndex: 10,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          bottom: 0
        }}
      >
        <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100vw' }}>
          <Box
            component="a"
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
            target="_blank"
            href="https://sail.bu.edu"
          >
            <Avatar sx={{ width: 36, height: 36, mr: 1 }} src="https://sail.codes/img/s_logo.png" />
            <Typography component="span" variant="h5">
              SAIL
            </Typography>
          </Box>
          <IconButton href="https://github.com/hicsail" target="_blank">
            <GitHub />
          </IconButton>
        </Toolbar>
      </Box>
    </Box>
  );
};
