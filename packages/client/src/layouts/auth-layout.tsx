import { Paths } from '@constants/paths';
import { AppBar, Box, Container, Tab, Tabs, Toolbar } from '@mui/material';
import { FC } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export interface LayoutProps {}

export const AuthLayout: FC<LayoutProps> = ({}) => {
  const location = useLocation();

  return (
    <Box>
      <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Tabs value={location.pathname}>
            <Tab
              label="Users"
              value={Paths.USER_LIST}
              to={Paths.USER_LIST}
              component={Link}
              sx={{
                '&.Mui-selected': {
                  color: 'primary'
                },
                color: 'primary'
              }}
            />
            <Tab
              label="Invite"
              value={Paths.INVITE}
              to={Paths.INVITE}
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
