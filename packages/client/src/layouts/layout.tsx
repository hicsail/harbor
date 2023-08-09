import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClipboardList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { Paths } from '@constants/paths';
import { TreeView } from '@mui/lab';

export interface LayoutProps {}

const drawerWidth = 180;

export const Layout: FC<LayoutProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const theme = useTheme();

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
          height: 264,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Toolbar />
        <TreeView sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
          <List component="nav" aria-label="user and projects">
            <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0, Paths.USER_LIST)}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faUsers} />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
            <ListItemButton selected={selectedIndex === 1} onClick={() => handleListItemClick(1, Paths.PROJECT)}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faClipboardList} />
              </ListItemIcon>
              <ListItemText primary="Project" />
            </ListItemButton>
          </List>
        </TreeView>
        <Box
          sx={{
            p: 2,
            borderTop: '1px solid ',
            backgroundColor: theme.palette.primary.main
          }}
        >
          <ListItemButton onClick={() => navigate(Paths.LOGOUT)}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </ListItemIcon>
          </ListItemButton>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1, pb: '30px' }}>
        <Toolbar />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
