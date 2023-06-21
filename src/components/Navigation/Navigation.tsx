import { Link } from 'react-router-dom';
import {
  List, ListItem, ListItemButton, ListItemIcon, Box,
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
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <HomeIcon />
            </ListItemIcon>
            <Link className='link' to="/">Home</Link>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={closeDrawer}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <SchoolIcon />
            </ListItemIcon>
            <Link className='link' to="/learn">Learn</Link>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={closeDrawer}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <PsychologyAltIcon />
            </ListItemIcon>
            <Link className='link' to="/test">Test</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navigation;
