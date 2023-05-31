import { Box, Tab, Tabs, Typography } from '@mui/material';
import { FC, ReactNode, useState } from 'react';

export interface LayoutProps {
  tabLabels: string[];
  children: ReactNode[];
  defaultTab: number;
}

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export const AuthLayout: FC<LayoutProps> = ({ tabLabels, children, defaultTab }) => {
  const [value, setValue] = useState(defaultTab);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} {...a11yProps(index)} />
        ))}
      </Tabs>

      {children.map((child, index) => (
        <TabPanel key={index} value={value} index={index}>
          {child}
        </TabPanel>
      ))}
    </Box>
  );
};
