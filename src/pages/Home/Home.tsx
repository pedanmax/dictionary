import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Form from '../../components/Form/Form';
import Words from '../../components/Words/Words';
import { StoreType } from '../../types/types';
import './Home.scss';

const Home = () => {
  const words = useSelector((state:StoreType) => state.words);
  return (
    <Box>
      <Typography
        component='h2'
        fontWeight='500'
        fontSize='30px'
        textAlign='center'
        mb='20px'
        color='primary'
      >
        {words?.length ? 'Add new word!' : 'Add your first word!'}
      </Typography>
      <Form />
      {Boolean(words?.length) && <Words />}
    </Box>
  );
};

export default Home;
