import React, { FC } from 'react';
import { Box, Button, Container, Grow, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ErrorLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ErrorLayout: FC<ErrorLayoutProps> = ({ title, description, icon }) => {
  const navigate = useNavigate();

  return (
    <Grow in>
      <Container
        sx={{
          display: 'flex',
          minHeight: '100%',
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            {title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
          <Box sx={{ m: 10 }}>{icon}</Box>
          <Button size="large" variant="contained" onClick={() => navigate(-1 as any, { replace: true })}>
            Go back
          </Button>
        </Box>
      </Container>
    </Grow>
  );
};

export default ErrorLayout;
