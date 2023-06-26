import { Typography } from '@mui/material';

const Word = ({ word } : { word: string }) => {
  return (
    <Typography
      component='li'
      sx={{ width: 'auto' }}
    >
      {word}
    </Typography>
  );
};

export default Word;
