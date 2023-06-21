import { useState } from 'react';
import {
  AppBar, Box, Toolbar, Typography, IconButton, Drawer as Menu,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from '../Navigation/Navigation';

const Drawer = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const closeDrawer = () => setIsOpenDrawer(false);
  const openDrawer = () => setIsOpenDrawer(true);
  return (
    <Box sx={{
      flexGrow: 1, padding: '10px', display: 'flex', alignItems: 'center', maxHeight: '50px', boxSizing: 'border-box',
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
      <Typography
        sx={{ color: '#111a35', fontWeight: '700' }}
        align='center'
      >
        Learn Words
      </Typography>
      <Menu
        anchor='left'
        open={isOpenDrawer}
        onClose={closeDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '200px',
            backgroundColor: '#9ad5ff',
          },
        }}
      >
        <Typography
          sx={{ padding: '10px', color: '#111a35', fontWeight: '700' }}
          align='center'
        >
          Learn Words
        </Typography>
        <Navigation closeDrawer={closeDrawer} />
      </Menu>
    </Box>
  );
};

export default Drawer;
