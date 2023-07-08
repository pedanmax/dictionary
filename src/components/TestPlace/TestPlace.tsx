import { useState, useEffect } from 'react';
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
// enable 'results' button if all fields isn't empty
// handle leave from page if test is started
// show popap with message after leaving
// show popap with result test
// change shuffling

const TestPlace = () => {
  const [stateResultButton, setStateResultButton] = useState(false);
  const [stateTest, setStateTest] = useState('');
  const { isStarted, testFields } = useSelector((state: StoreType) => state.stateTest);
  const words = useSelector((state: StoreType) => state.words);
  const testGroup = useSelector((state: StoreType) => state.testGroup);
  const testWords = words?.filter((word) => word.group === testGroup);
  const dispatch = useDispatch();
  const handleStartTest = () => dispatch(actions.startTest(true));
  const handleResetTest = () => dispatch(actions.resetTest(false));
  const handleResultTest = () => {
    dispatch(actions.resetTest(false));
  };
  const testFieldsKeys = Object.keys(testFields);

  useEffect(() => {
    if (testFieldsKeys.length === testWords?.length) {
      const checkInputsValue = testFieldsKeys.map((key) => testFields[key].inputTranslation.trim());
      setStateResultButton(checkInputsValue.every((value) => value !== ''));
      const arrayWithResult = testFieldsKeys.map((key) => testFields[key].correct);
      const trueTranslationCount = arrayWithResult.reduce((acc, next) => acc + next, 0);
      setStateTest(`${trueTranslationCount}/${arrayWithResult.length}`);
    } else setStateResultButton(false);
  }, [testFieldsKeys, testWords?.length, testFields]);

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
  );
};

export default TestPlace;
