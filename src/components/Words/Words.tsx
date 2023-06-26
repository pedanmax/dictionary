import { useSelector } from 'react-redux';
import { Box, Typography, List } from '@mui/material';
import { StoreType } from '../../types/types';
import Word from './Word';

const Words = () => {
  const words = useSelector((state:StoreType) => state.words);
  return (
    <Box>
      {Boolean(words?.length) && (
        <>
          <Typography component='h3' fontSize='26px'>
            My words:
          </Typography>
          <List sx={{
            display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px',
          }}
          >
            {words?.map((word) => (
              <Word word={word.word} key={word.id} id={word.id} />
            ))}
          </List>
        </>
      )}
    </Box>
  );
};

export default Words;
