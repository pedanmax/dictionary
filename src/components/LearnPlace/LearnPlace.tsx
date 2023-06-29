/* eslint-disable max-len */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Stack, Button } from '@mui/material';
import { StoreType } from '../../types/types';
import LearnItem from './LearnItem';

const LearnPlace = () => {
  const [swapped, setSwapped] = useState(false);
  const allWords = useSelector((state:StoreType) => state.words);
  const activeGroup = useSelector((state:StoreType) => state.activeGroup);
  const words = allWords?.filter((word) => word.group === activeGroup);

  return (
    <Stack
      sx={{
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxSizing: 'border-box',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
      alignItems='center'
    >
      <Stack
        direction='row'
        columnGap='40px'
        rowGap='10px'
        flexWrap='wrap'
        mb='20px'
        width='100%'
        justifyContent='space-between'
      >
        <Button
          variant='contained'
          size='small'
          sx={{ '&.MuiButton-root': { backgroundColor: '#004668' }, '&.MuiButton-root:hover': { backgroundColor: '#003954' } }}
        >
          Shuffle words
        </Button>
        <Button
          variant='contained'
          size='small'
          sx={{ '&.MuiButton-root': { backgroundColor: '#004668' }, '&.MuiButton-root:hover': { backgroundColor: '#003954' } }}
        >
          Show translate
        </Button>
        <Button
          onClick={() => setSwapped((prev) => !prev)}
          variant='contained'
          size='small'
          sx={{ '&.MuiButton-root': { backgroundColor: '#004668' }, '&.MuiButton-root:hover': { backgroundColor: '#003954' } }}
        >
          Swap
        </Button>
      </Stack>
      <Stack
        direction='column'
        width='100%'
        justifyContent='space-between'
      >
        {words?.map((word) => {
          return !swapped
            ? (
              <LearnItem
                right={word.word}
                left={word.translateWord}
                key={word.id}
                visible={false}
                id={word.id}
              />
            )
            : (
              <LearnItem
                right={word.translateWord}
                left={word.word}
                key={word.id}
                visible={false}
                id={word.id}
              />
            );
        })}
      </Stack>
    </Stack>
  );
};

export default LearnPlace;
