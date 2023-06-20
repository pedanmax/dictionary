import { Link } from 'react-router-dom';
import {
  List, ListItem, ListItemButton,
} from '@mui/material';
import './Navigation.scss';

const Navigation = ({ closeDrawer } : { closeDrawer: () => void }) => {
  return (
    <nav>
      <List>
        <ListItem onClick={closeDrawer}>
          <ListItemButton>
            <Link to="/">Home</Link>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={closeDrawer}>
          <ListItemButton>
            <Link to="/learn">Learn</Link>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={closeDrawer}>
          <ListItemButton>
            <Link to="/test">Test</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
};

export default Navigation;
