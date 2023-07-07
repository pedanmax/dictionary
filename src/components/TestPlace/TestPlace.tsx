import { useSelector, useDispatch } from 'react-redux';
import { Stack, Button } from '@mui/material';
import { actions } from '../../Redux/reducers/stateTest.slice';
import GroupTestItems from './GroupTestItems';
import { StoreType } from '../../types/types';

// after click on 'start test' disable start, reset, test buttons and change state 'start-test'
// if test dosen't start inputs will be disbled
// if all fields are not empty i will disable 'results' button
// load words in random order
// if user leave test page test and test group will be reset
// i must save all values of translate to object

const TestPlace = () => {
  const { isStarted } = useSelector((state: StoreType) => state.stateTest);
  const dispatch = useDispatch();
  const handleStartTest = () => dispatch(actions.startTest(true));
  const handleResetTest = () => dispatch(actions.resetTest(false));
  return (
    <Stack
      spacing={4}
      sx={{
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxSizing: 'border-box',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <Stack
        direction='row'
        spacing={2}
      >
        <Button
          sx={{
            '&.MuiButton-root': { backgroundColor: '#004668' },
            '&.MuiButton-root:hover': { backgroundColor: '#003954' },
            '&.Mui-disabled': { backgroundColor: '#516e83' },
          }}
          variant='contained'
          onClick={handleResetTest}
          disabled={!isStarted}
        >
          Reset test
        </Button>
        <Button
          sx={{
            '&.MuiButton-root': { backgroundColor: '#004668' },
            '&.MuiButton-root:hover': { backgroundColor: '#003954' },
            '&.Mui-disabled': { backgroundColor: '#516e83' },
          }}
          variant='contained'
          onClick={handleStartTest}
          disabled={isStarted}
        >
          Start test
        </Button>
        <Button
          disabled
          sx={{
            '&.MuiButton-root': { backgroundColor: '#004668' },
            '&.MuiButton-root:hover': { backgroundColor: '#003954' },
            '&.Mui-disabled': { backgroundColor: '#516e83' },
          }}
          variant='contained'
        >
          Results
        </Button>
      </Stack>
      <GroupTestItems />
    </Stack>
  );
};

export default TestPlace;
