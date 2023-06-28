import { Typography, Box } from '@mui/material';
import Groups from '../../components/Groups/Groups';
import './Learn.scss';

const Learn = () => {
  return (
    <Box>
      <Box mb='30px'>
        {/* <Typography
          fontWeight='700'
          fontSize='30px'
          component='h2'
          textAlign='center'
          mb='20px'
          color='#01012d'
        >
          You can learn words here!
        </Typography> */}
        <Typography
          fontWeight='500'
          fontSize='20px'
          component='h3'
          textAlign='center'
          color='#02025d'
        >
          Choose the right one group and get started!
        </Typography>
      </Box>
      <Groups />
    </Box>
  );
};

export default Learn;
