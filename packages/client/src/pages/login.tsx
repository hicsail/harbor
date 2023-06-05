import { Box } from '@mui/material';
import { useEffect } from 'react';

export const Login = () => {
  const loginUrl = `${import.meta.env.VITE_AUTHSERVICE_URL}`;

  useEffect(() => {
    window.location.href = loginUrl;
  });

  return <Box>Login</Box>;
};
