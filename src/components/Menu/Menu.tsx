import { Box, Typography } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Menu.scss';

const Menu = () => {
  return (
    <Box sx={{
      display: {
        xs: 'none',
        sm: 'none',
        md: 'flex',
        lg: 'flex',
        xl: 'flex',
      },
      justifyContent: 'space-between',
      minWidth: '300px',
    }}
    >
      <Logo />
      <Navigation />
    </Box>
  );
};

export default Menu;
