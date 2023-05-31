import { GitHub } from '@mui/icons-material';
import { Box, Toolbar, Avatar, Typography, IconButton } from '@mui/material';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0
      }}
    >
      <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100vw' }}>
        <Box
          component="a"
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
          target="_blank"
          href="https://sail.bu.edu"
        >
          <Avatar sx={{ width: 36, height: 36, mr: 1 }} src="https://sail.codes/img/s_logo.png" />
          <Typography component="span" variant="h5">
            SAIL
          </Typography>
        </Box>
        <IconButton href="https://github.com/hicsail" target="_blank">
          <GitHub />
        </IconButton>
      </Toolbar>
    </Box>
  );
};
