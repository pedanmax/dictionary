import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useConfirm } from 'material-ui-confirm';
import { useSelector, useDispatch } from 'react-redux';
import icon from '../../assets/book.png';
import { actions as stateTest } from '../../Redux/reducers/stateTest.slice';
import { actions as testGroup } from '../../Redux/reducers/testGroup.slice';
import { NavigationProps, StoreType } from '../../types/types';

const Logo = ({ closeDrawer } : NavigationProps) => {
  const dispatch = useDispatch();
  const testGroupName = useSelector((state: StoreType) => state.testGroup);
  const { isStarted } = useSelector((state:StoreType) => state.stateTest);
  const navigate = useNavigate();
  const confirm = useConfirm();

  const handleLeavePage = (way: string) => {
    if (!isStarted) {
      navigate(way);
      if (testGroupName) dispatch(testGroup.setTestGroup(''));
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
    dispatch(stateTest.resultIsOpen(false));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '10px',
        cursor: 'pointer',
      }}
      onClick={() => {
        handleLeavePage('/');
        closeDrawer?.();
      }}
    >
      <Typography
        sx={{ color: '#111a35', fontWeight: '700', fontSize: '18px' }}
        align='center'
      >
        Learn Words
      </Typography>
      <img src={icon} alt="title-icon" className="title-icon" />
    </Box>
  );
};

export default Logo;
