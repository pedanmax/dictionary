/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-mixed-operators */
import { Stack, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { actions as stateTest } from '../../Redux/reducers/stateTest.slice';
import { StoreType } from '../../types/types';
import quotes from './ResultQuotes';

const TestResults = ({ handleOutlineInput } : { handleOutlineInput: () => void }) => {
  const dispatch = useDispatch();
  const { testFields } = useSelector((state: StoreType) => state.stateTest);
  const testFieldsKeys = Object.keys(testFields);
  const arrayWithRightResult = testFieldsKeys.map((key) => testFields[key].correct);
  const trueTranslationCount = arrayWithRightResult.reduce((acc, next) => acc + next, 0);

  const result = `${trueTranslationCount}/${arrayWithRightResult.length}`;
  const correctPerCent = Math.round(trueTranslationCount / arrayWithRightResult.length * 100);
  const quotesByResult = correctPerCent < 34 ? quotes.begginger
    : correctPerCent > 33 && correctPerCent < 67 ? quotes.intermediate
      : correctPerCent > 66 && correctPerCent < 100 ? quotes.upperIntermediate
        : correctPerCent === 100 ? quotes.advanced : null;
  const getRandomQuote = () => quotesByResult && quotesByResult[Math.floor(Math.random() * quotesByResult.length)];

  const handleOpen = () => {
    dispatch(stateTest.resultIsOpen(false));
    dispatch(stateTest.resetTest(false));
    handleOutlineInput();
  };
  return (
    <Stack
      sx={{
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '10px',
        position: 'relative',
        marginBottom: '20px',
      }}
    >
      <Stack
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography>
          Your result is
          {' '}
          {result}
          .
        </Typography>
        <IconButton
          onClick={handleOpen}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      {quotesByResult && (
        <Typography>
          {getRandomQuote()}
        </Typography>
      )}
    </Stack>
  );
};

export default TestResults;
