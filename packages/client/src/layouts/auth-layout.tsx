import { Paths } from '@constants/paths';
<<<<<<< HEAD
import { Box, Tab, Tabs } from '@mui/material';
import { FC, useState } from 'react';
=======
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { FC, ReactNode, useState } from 'react';
>>>>>>> projects-routing
import { Outlet, useNavigate } from 'react-router-dom';

export interface LayoutProps {}

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

export const AuthLayout: FC<LayoutProps> = ({}) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

<<<<<<< HEAD
  const handleChange = (_event: any, newValue: any) => {
=======
  const handleChange = (event: any, newValue: any) => {
>>>>>>> projects-routing
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate(Paths.USER_LIST);
        break;
      case 1:
        navigate(Paths.INVITE);
        break;
    }
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Users" {...a11yProps(0)} />
        <Tab label="Index" {...a11yProps(1)} />
      </Tabs>
      <Outlet />
    </Box>
  );
};
