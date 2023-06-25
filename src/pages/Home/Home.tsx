import { Typography, Box } from '@mui/material';
import Form from '../../components/Form/Form';
import './Home.scss';

const Home = () => {
  return (
    <Box>
      <Typography
        component='h2'
        fontWeight='500'
        fontSize='30px'
        textAlign='center'
        mb='20px'
      >
        Add your first word!
      </Typography>
      <Form />
    </Box>
  );
};

export default Home;
