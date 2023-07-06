import { Link } from 'react-router-dom';
import { Stack, Typography, Button } from '@mui/material';

const Empty = ({ text }: { text: string }) => {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      spacing={3}
    >
      <Typography
        color='primary'
        component='h2'
        textAlign='center'
        fontSize='30px'
      >
        Nothing to
        {' '}
        {text}
        !
      </Typography>
      <Link to='/'>
        <Button
          sx={{
            minWidth: '120px',
            height: '50px',
            '&.MuiButton-root': { backgroundColor: '#004668' },
            '&.MuiButton-root:hover': { backgroundColor: '#003954' },
          }}
          variant='contained'
        >
          Add word
        </Button>
      </Link>
    </Stack>
  );
};

export default Empty;
