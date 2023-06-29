import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import Groups from '../../components/Groups/Groups';
import LearnPlace from '../../components/LearnPlace/LearnPlace';
import './Learn.scss';
import { StoreType } from '../../types/types';

const Learn = () => {
  const activeGroup = useSelector((state: StoreType) => state.activeGroup);
  return (
    <Box>
      <Box mb='30px'>
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
      {activeGroup && <LearnPlace />}
    </Box>
  );
};

export default Learn;
