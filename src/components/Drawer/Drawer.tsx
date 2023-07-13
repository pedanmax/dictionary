import { useState } from 'react';
import {
  Box, IconButton, Drawer as MenuDrawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Drawer.scss';

const Drawer = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const closeDrawer = () => setIsOpenDrawer(false);
  const openDrawer = () => setIsOpenDrawer(true);
  return (
    <Box sx={{
      flexGrow: 1,
      padding: '10px',
      display: {
        xs: 'flex',
        sm: 'flex',
        md: 'none',
        lg: 'none',
        xl: 'none',
      },
      alignItems: 'center',
      maxHeight: '50px',
      boxSizing: 'border-box',
    }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={openDrawer}
      >
        <MenuIcon />
      </IconButton>
      <MenuDrawer
        anchor='left'
        open={isOpenDrawer}
        onClose={closeDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '210px',
            backgroundColor: '#9ad5ff',
          },
        }}
      >
        <Logo closeDrawer={closeDrawer} />
        <Navigation closeDrawer={closeDrawer} />
      </MenuDrawer>
    </Box>
  );
};

export default Drawer;
