import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import Groups from '../../components/Groups/Groups';
import LearnPlace from '../../components/LearnPlace/LearnPlace';
import './Learn.scss';
import { StoreType } from '../../types/types';
import Empty from '../../components/Empty/Empty';

const Learn = () => {
  const activeGroup = useSelector((state: StoreType) => state.activeGroup);
  const words = useSelector((state: StoreType) => state.words);
  return words?.length ? (
    <Box>
      <Box mb='30px'>
        <Typography
          fontWeight='500'
          fontSize='24px'
          component='h3'
          textAlign='center'
          color='#02025d'
        >
          Choose the right one group and get started!
        </Typography>
      </Box>
      <Groups variant='learn' />
      {activeGroup && <LearnPlace />}
    </Box>
  )
    : (
      <Empty text='learn' />
    );
};

export default Learn;
