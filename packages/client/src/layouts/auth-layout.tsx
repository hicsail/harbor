import { Paths } from '@constants/paths';
import { AppBar, Box, Container, Tab, Tabs, Toolbar } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export interface LayoutProps {}

// const a11yProps = (index: any) => {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`
//   };
// };

export const AuthLayout: FC<LayoutProps> = ({}) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(Paths.USER_LIST);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    switch (newValue) {
      case Paths.USER_LIST:
        navigate(Paths.USER_LIST);
        break;
      case Paths.INVITE:
        navigate(Paths.INVITE);
        break;
    }
  };

  return (
    <Box>
      <AppBar position="sticky" sx={{}}>
        <Toolbar>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="Users"
              value={Paths.USER_LIST}
              to={Paths.USER_LIST}
              component={Link}
              sx={{
                '&.Mui-selected': {
                  color: 'white'
                },
                color: 'white'
              }}
            />
            <Tab
              label="Invite"
              value={Paths.INVITE}
              to={Paths.INVITE}
              component={Link}
              sx={{
                '&.Mui-selected': {
                  color: 'white'
                },
                color: 'white'
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
