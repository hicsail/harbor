<<<<<<< HEAD
import { GitHub } from '@mui/icons-material';
import { Avatar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
=======
import { Box, Container, Toolbar } from '@mui/material';
import { FC } from 'react';
>>>>>>> 0b1a9df81f1581a1b8988ecb0c36e47300cf8107
import { Paths } from '@constants/paths';
import { SideBar } from '@components/side-bar/side-bar';
import { SideListItem } from '@components/side-bar/side-list-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
<<<<<<< HEAD

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
=======
import { Outlet } from 'react-router-dom';

export interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
>>>>>>> 0b1a9df81f1581a1b8988ecb0c36e47300cf8107
  return (
    <Box
      sx={{
        display: 'flex'
      }}
    >
      <Header />
      <SideBar>
        <SideListItem nodeId={Paths.USER_LIST} label="Users" path={Paths.USER_LIST} icon={<FontAwesomeIcon icon={faUsers} />} />
        <SideListItem nodeId={Paths.USER_LIST} label="Invite" path={Paths.INVITE} icon={<FontAwesomeIcon icon={faUserPlus} />} />
      </SideBar>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar />
<<<<<<< HEAD
        <Container sx={{ mt: 4 }}>{children}</Container>
=======
        <Container sx={{ mt: 4 }}>
          <Outlet />
        </Container>
>>>>>>> 0b1a9df81f1581a1b8988ecb0c36e47300cf8107
      </Box>
      <Footer />
    </Box>
  );
};
