import { Paths } from '@constants/paths';
import { AppBar, Box, Container, Tab, Tabs, Toolbar, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export interface LayoutProps {}

export const ProjectLayout: FC<LayoutProps> = ({}) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <Box>
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.background.paper }}>
        <Toolbar>
          <Tabs value={location.pathname == Paths.PROJECT || location.pathname == Paths.SETTINGS ? location.pathname : false}>
            <Tab
              label="Project"
              value={Paths.PROJECT}
              to={Paths.PROJECT}
              component={Link}
              sx={{
                '&.Mui-selected': {
                  color: 'primary'
                },
                color: 'primary'
              }}
            />
            <Tab
              label="Settings"
              value={Paths.SETTINGS}
              to={Paths.SETTINGS}
              component={Link}
              sx={{
                '&.Mui-selected': {
                  color: 'primary'
                },
                color: 'primary'
              }}
            />
            <Tab
              label="Auth Methods"
              value={Paths.AUTH_METHODS}
              to={Paths.AUTH_METHODS}
              component={Link}
              sx={{
                '&.Mui-selected': {
                  color: 'primary'
                },
                color: 'primary'
              }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};
