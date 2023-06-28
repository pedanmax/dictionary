import { useSelector } from 'react-redux';
import { Box, Typography, Stack, IconButton, Button } from '@mui/material';
import { StoreType } from '../../types/types';

const LearnPlace = () => {
  const allWords = useSelector((state:StoreType) => state.words);
  const activeGroup = useSelector((state:StoreType) => state.activeGroup);
  const words = allWords?.filter((word) => word.group === activeGroup);
  console.log(words);
  return (
    <Stack
      sx={{
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxSizing: 'border-box',
        maxWidth: '500px',
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
        justifyContent='space-around'
        width='100%'
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
      </Stack>
      <Stack
        direction='row'
        gap='40px'
        width='100%'
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Typography component='h5' fontWeight='500' fontSize='20px' mb='15px' textAlign='center'>Words</Typography>
          {words?.map((word) => {
            return (
              <Typography key={word.id} fontSize='18px' textAlign='center'>
                {word.word}
              </Typography>
            );
          })}
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Typography component='h5' fontWeight='500' fontSize='20px' mb='15px' textAlign='center'>Translation</Typography>
          {words?.map((word) => {
            return (
              <Typography key={word.id} fontSize='18px' textAlign='center'>
                {word.translateWord}
              </Typography>
            );
          })}
        </Box>
      </Stack>
    </Stack>
  );
};

export default LearnPlace;
