import { useState } from 'react';
import { Stack, Typography, TextField } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useSelector } from 'react-redux';
import { StoreType } from '../../types/types';

type TestItemProps = {
  word: string,
  id: number,
  translation: string,
};

const TestItem = ({ word, id, translation } : TestItemProps) => {
  const { isStarted } = useSelector((state: StoreType) => state.stateTest);
  const [value, setValue] = useState('');
  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event?.target.value);
  const comparing = value.toLowerCase() === translation;
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
        disabled={!isStarted}
      />
      {!comparing && <Typography color='error'>incorrect transtation</Typography>}
    </Stack>
  );
};

export default TestItem;
