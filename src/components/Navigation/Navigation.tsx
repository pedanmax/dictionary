import { useNavigate } from 'react-router-dom';
import {
  List, ListItem, ListItemButton, ListItemIcon, Box, Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { useConfirm } from 'material-ui-confirm';
import { useSelector, useDispatch } from 'react-redux';
import { actions as stateTest } from '../../Redux/reducers/stateTest.slice';
import { actions as testGroup } from '../../Redux/reducers/testGroup.slice';
import { NavigationProps, StoreType } from '../../types/types';

const links = [
  { link: '/', text: 'Home', icon: <HomeIcon /> },
  { link: '/learn', text: 'Learn', icon: <SchoolIcon /> },
  { link: '/test', text: 'Test', icon: <PsychologyAltIcon /> },
];

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
        {links.map((link) => {
          return (
            <ListItem onClick={closeDrawer} key={link.text}>
              <ListItemButton onClick={() => handleLeavePage(link.link)}>
                <ListItemIcon sx={{ minWidth: '35px' }}>
                  {link.icon}
                </ListItemIcon>
                <Typography fontWeight='500' color='#01012d'>{link.text}</Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Navigation;
