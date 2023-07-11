/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { actions as stateTest } from '../../Redux/reducers/stateTest.slice';
import { StoreType } from '../../types/types';

const TestResults = () => {
  const dispatch = useDispatch();
  const { testFields } = useSelector((state: StoreType) => state.stateTest);
  const testFieldsKeys = Object.keys(testFields);
  const arrayWithRightResult = testFieldsKeys.map((key) => testFields[key].correct);
  const arrayWithWrongResult = testFieldsKeys.filter((key) => !testFields[key].correct);
  const trueTranslationCount = arrayWithRightResult.reduce((acc, next) => acc + next, 0);

  const result = `${trueTranslationCount}/${arrayWithRightResult.length}`;
  const handleOpen = () => {
    dispatch(stateTest.resultIsOpen(false));
    dispatch(stateTest.resetTest(false));
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
      {arrayWithWrongResult.length > 0
        ? (
          <Typography>
            You have wrong translation
            {' '}
            {arrayWithWrongResult.join(', ')}
            .
          </Typography>
        )
        : <Typography>Everything is right!</Typography>}
    </Stack>
  );
};

export default TestResults;
