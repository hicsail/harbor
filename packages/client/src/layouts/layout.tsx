import { Box, Container, Toolbar } from '@mui/material';
import { FC } from 'react';
import { Paths } from '@constants/paths';
import { SideBar } from '@components/side-bar/side-bar';
import { SideListItem } from '@components/side-bar/side-list-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { Outlet } from 'react-router-dom';

export interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
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
        <Container sx={{ mt: 4 }}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};
