/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Button, Box } from '@mui/material';
import { actions } from '../../Redux/reducers/stateTest.slice';
import GroupTestItems from './GroupTestItems';
import { StoreType } from '../../types/types';
import TestResults from './TestResults';

// after click on 'start test' disable start, reset, test buttons and change state 'start-test'
// if test dosen't start inputs will be disbled
// if all fields are not empty i will disable 'results' button
// load words in random order
// if user leave test page test and test group will be reset
// i must save all values of translate to object
// enable 'results' button if all fields isn't empty
// handle leave from page if test is started
// show popap with message after leaving
// show popap with result test
// change shuffling
// add reverse test

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
    <Box>
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
        <GroupTestItems />
      </Stack>
    </Box>
  );
};

export default TestPlace;
