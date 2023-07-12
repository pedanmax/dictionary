/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Button, Box } from '@mui/material';
import { actions } from '../../Redux/reducers/stateTest.slice';
import GroupTestItems from './GroupTestItems';
import { StoreType } from '../../types/types';
import TestResults from './TestResults';

// add reverse test
// limit the execution of the test if the words are less than 5

const TestPlace = () => {
  const [stateResultButton, setStateResultButton] = useState(false);
  const { isStarted, testFields, resultIsOpen } = useSelector((state: StoreType) => state.stateTest);
  const words = useSelector((state: StoreType) => state.words);
  const testGroup = useSelector((state: StoreType) => state.testGroup);
  const testWords = words?.filter((word) => word.group === testGroup);
  const dispatch = useDispatch();

  const handleStartTest = () => {
    dispatch(actions.startTest(true));
  };

  const handleResetTest = () => {
    dispatch(actions.resetTest(false));
    dispatch(actions.resultIsOpen(false));
  };

  const handleResultTest = () => {
    dispatch(actions.resultIsOpen(true));
  };

  const testFieldsKeys = Object.keys(testFields);

  useEffect(() => {
    if (testFieldsKeys.length === testWords?.length) {
      const checkInputsValue = testFieldsKeys.map((key) => testFields[key].inputTranslation.trim());
      setStateResultButton(checkInputsValue.every((value) => value !== ''));
    } else setStateResultButton(false);
  }, [testFieldsKeys, testWords?.length, testFields]);

  return (
    <Box sx={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Stack
        direction='row'
        spacing={2}
        mb='20px'
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
          Reset
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
          Start
        </Button>
        <Button
          disabled={!stateResultButton}
          onClick={handleResultTest}
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
      {resultIsOpen && <TestResults />}
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
        <GroupTestItems />
      </Stack>
    </Box>
  );
};

export default TestPlace;
