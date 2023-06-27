import { Link } from 'react-router-dom';
import {
  List, ListItem, ListItemButton, ListItemIcon, Box, Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { NavigationProps } from '../../types/types';
import './Navigation.scss';

const Navigation = ({ closeDrawer } : NavigationProps) => {
  return (
    <Box>
      <List sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'flex',
          lg: 'flex',
          xl: 'flex',
        },
      }}
      >
        <ListItem onClick={closeDrawer}>
          <Link className='link' to='/'>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <HomeIcon />
              </ListItemIcon>
              <Typography fontWeight='500' color='#01012d'>Home</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem onClick={closeDrawer}>
          <Link className='link' to='/learn'>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <HomeIcon />
              </ListItemIcon>
              <Typography fontWeight='500' color='#01012d'>Learn</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem onClick={closeDrawer}>
          <Link className='link' to='/test'>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <HomeIcon />
              </ListItemIcon>
              <Typography fontWeight='500' color='#01012d'>Test</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navigation;
