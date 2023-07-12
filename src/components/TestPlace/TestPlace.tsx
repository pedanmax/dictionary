/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Button, Box, Typography } from '@mui/material';
import { actions } from '../../Redux/reducers/stateTest.slice';
import { actions as testingWords } from '../../Redux/reducers/testingWords.slice';
import GroupTestItems from './GroupTestItems';
import { StoreType } from '../../types/types';
import TestResults from './TestResults';
import oopsImg from '../../assets/oops.png';

// add image in test result
// forbiden typing number

const TestPlace = () => {
  const [swapped, setSwapped] = useState(false);
  const [stateResultButton, setStateResultButton] = useState(false);
  const { isStarted, testFields, resultIsOpen } = useSelector((state: StoreType) => state.stateTest);
  const testWords = useSelector((state:StoreType) => state.testingWords);
  const countTestWords = testWords && testWords?.length >= 5;
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

  const handleSwappedState = () => {
    setSwapped(!swapped);
    dispatch(testingWords.shuffleWords());
  };

  const buttons = [
    { text: 'reset', function: handleResetTest, disabled: !isStarted },
    { text: 'start', function: handleStartTest, disabled: isStarted },
    { text: 'swap', function: handleSwappedState, disabled: isStarted },
    { text: 'result', function: handleResultTest, disabled: !stateResultButton },
  ];

  const testFieldsKeys = Object.keys(testFields);

  useEffect(() => {
    if (testFieldsKeys.length === testWords?.length) {
      const checkInputsValue = testFieldsKeys.map((key) => testFields[key].inputTranslation.trim());
      setStateResultButton(checkInputsValue.every((value) => value !== ''));
    } else setStateResultButton(false);
  }, [testFieldsKeys, testWords?.length, testFields]);

  return countTestWords
    ? (
      <Box sx={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Stack
          direction='row'
          spacing={2}
          mb='20px'
          justifyContent='center'
        >
          {buttons.map((button) => {
            return (
              <Button
                key={button.text}
                sx={{
                  '&.MuiButton-root': { backgroundColor: '#004668' },
                  '&.MuiButton-root:hover': { backgroundColor: '#003954' },
                  '&.Mui-disabled': { backgroundColor: '#516e83' },
                }}
                variant='contained'
                onClick={button.function}
                disabled={button.disabled}
              >
                {button.text}
              </Button>
            );
          })}
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
          <GroupTestItems swapped={swapped} />
        </Stack>
      </Box>
    )
    : (
      <Stack
        justifyContent='center'
        alignItems='center'
      >
        <Typography component='h3' fontSize='26px' color='primary'>
          You can't test a group with less than 5 words!
        </Typography>
        <Typography component='h3' fontSize='22px' color='primary' mb='20px'>
          Add more words or change the group!
        </Typography>
        <img src={oopsImg} alt='oops' style={{ borderRadius: '10px', maxWidth: '100%' }} />
      </Stack>
    );
};

export default TestPlace;
