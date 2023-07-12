import { useNavigate } from 'react-router-dom';
import {
  List, ListItem, ListItemButton, ListItemIcon, Box, Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useConfirm } from 'material-ui-confirm';
import { useSelector, useDispatch } from 'react-redux';
import { actions as stateTest } from '../../Redux/reducers/stateTest.slice';
import { actions as testGroup } from '../../Redux/reducers/testGroup.slice';
import { NavigationProps, StoreType } from '../../types/types';

const Navigation = ({ closeDrawer } : NavigationProps) => {
  const dispatch = useDispatch();
  const { isStarted } = useSelector((state:StoreType) => state.stateTest);
  const navigate = useNavigate();
  const confirm = useConfirm();

  const handleLeavePage = (way: string) => {
    if (!isStarted) {
      navigate(way);
      dispatch(testGroup.setTestGroup(''));
    } else if (isStarted && way !== '/test') {
      confirm({
        description: 'If you leave page, test will be reset.',
        confirmationButtonProps: { variant: 'contained', color: 'primary' },
        cancellationButtonProps: { variant: 'outlined', color: 'primary' },
      })
        .then(() => {
          dispatch(stateTest.resetTest(false));
          navigate(way);
        })
        .catch(() => navigate('/test'));
    }
  };

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
          <ListItemButton onClick={() => handleLeavePage('/')}>
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <HomeIcon />
            </ListItemIcon>
            <Typography fontWeight='500' color='#01012d'>Home</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={closeDrawer}>
          <ListItemButton onClick={() => handleLeavePage('/learn')}>
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <HomeIcon />
            </ListItemIcon>
            <Typography fontWeight='500' color='#01012d'>Learn</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={closeDrawer}>
          <ListItemButton onClick={() => handleLeavePage('/test')}>
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <HomeIcon />
            </ListItemIcon>
            <Typography fontWeight='500' color='#01012d'>Test</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navigation;
