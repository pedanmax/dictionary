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
        correct: translation === event?.target.value.toLowerCase(),
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

  const comparing = value.toLowerCase().trim() === translation;
  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing={2}
    >
      <Typography mt='15px'>{word}</Typography>
      <HorizontalRuleIcon
        color='primary'
        sx={{ marginTop: '15px', alignSelf: 'flex-end' }}
      />
      <TextField
        variant='standard'
        label='Translation'
        type='text'
        autoComplete='off'
        value={value}
        onChange={handleValue}
        disabled={!isStarted || resultIsOpen}
      />
      {!comparing && <Typography color='error'>incorrect transtation</Typography>}
    </Stack>
  );
};

export default TestItem;
