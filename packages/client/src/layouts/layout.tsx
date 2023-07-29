import { Box, Drawer, List, ListItemButton, ListItemIcon, Toolbar } from '@mui/material';
import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { Paths } from '@constants/paths';
import { TreeView } from '@mui/lab';

export interface LayoutProps {}

const drawerWidth = 120;

export const Layout: FC<LayoutProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index: number, path: string) => {
    setSelectedIndex(index);
    navigate(path);
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex'
      }}
    >
      <Header />

      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          height: 264
        }}
      >
        <Toolbar />
        <TreeView sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
          <List component="nav" aria-label="user and projects">
            <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0, Paths.USER_LIST)}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faUsers} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton selected={selectedIndex === 1} onClick={() => handleListItemClick(1, Paths.PROJECT)}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faClipboardList} />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </TreeView>
      </Drawer>
      <Box sx={{ flexGrow: 1, pb: '30px' }}>
        <Toolbar />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
