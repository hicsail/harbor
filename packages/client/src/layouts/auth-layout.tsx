import { Paths } from '@constants/paths';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { FC, ReactNode, useState } from 'react';
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

  const handleChange = (event: any, newValue: any) => {
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
        <Tab label="Invite" {...a11yProps(1)} />
      </Tabs>
      <Outlet />
    </Box>
  );
};
