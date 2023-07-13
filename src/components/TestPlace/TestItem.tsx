/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { Stack, Typography, TextField } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useSelector, useDispatch } from 'react-redux';
import { actions as stateTest } from '../../Redux/reducers/stateTest.slice';
import { StoreType } from '../../types/types';

type TestItemProps = {
  word: string,
  translation: string,
};

const TestItem = ({ word, translation } : TestItemProps) => {
  const dispatch = useDispatch();
  const { isStarted, testFields, resultIsOpen } = useSelector((state: StoreType) => state.stateTest);
  const [value, setValue] = useState('');
  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
    const object = {
      [word]: {
        word,
        translation,
        inputTranslation: event?.target.value,
        correct: translation === event?.target.value.toLowerCase().trim(),
      },
    };
    dispatch(stateTest.writeTranslate(object));
  };

  // reset input value after reset test
  useEffect(() => {
    if (!Object.keys(testFields).length) {
      setValue('');
    }
  }, [testFields]);
  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing={2}
      sx={{
        borderBottom: '1px solid #c4c4c4',
        padding: '10px',
        '&.MuiStack-root': {
          marginTop: '0px',
        },
      }}
    >
      <Stack
        flexDirection='row'
        flex='0 1 50%'
      >
        <Typography
          sx={{
            fontSize: {
              xs: '14px',
              sm: '16px',
            },
            flex: '1 1 auto',
            textAlign: 'center',
          }}
        >
          {word}
        </Typography>
        <HorizontalRuleIcon
          color='primary'
        />
      </Stack>
      <TextField
        variant='outlined'
        type='text'
        autoComplete='off'
        value={value}
        onChange={handleValue}
        disabled={!isStarted || resultIsOpen}
        sx={{
          flex: '0 1 50%',
          alignItems: 'center',
          '& .MuiInputBase-input': {
            padding: '2px 8px',
            fontSize: {
              xs: '14px',
              sm: '16px',
            },
          },
          '& .MuiInputBase-root': {
            maxWidth: '300px',
          },
        }}
      />
    </Stack>
  );
};

export default TestItem;
