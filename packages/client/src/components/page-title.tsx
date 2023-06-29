import { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface PageTitleProps {
  title: string;
  children: React.ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ title, children }: PageTitleProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography>{title}</Typography>
      {children}
    </Box>
  );
};
