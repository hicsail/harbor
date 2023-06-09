import { Paths } from '@constants/paths';
import { Box, Tab, Tabs } from '@mui/material';
import { FC, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export interface LayoutProps {}

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

export const ProjectLayout: FC<LayoutProps> = ({}) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate(Paths.PROJECT);
        break;
      case 1:
        navigate(Paths.SETTINGS);
        break;
      case 2:
        navigate(Paths.AUTH_METHODS);
        break;
    }
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Project" {...a11yProps(0)} />
        <Tab label="Settings" {...a11yProps(1)} />
        <Tab label="Auth Methods" {...a11yProps(2)} />
      </Tabs>
      <Outlet />
    </Box>
  );
};
