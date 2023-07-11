/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import Empty from '../../components/Empty/Empty';
import Groups from '../../components/Groups/Groups';
import TestPlace from '../../components/TestPlace/TestPlace';
import './Test.scss';
import { StoreType } from '../../types/types';

const Test = () => {
  const words = useSelector((state: StoreType) => state.words);
  const testGroup = useSelector((state: StoreType) => state.testGroup);

  return words?.length
    ? (
      <Box>
        <Typography
          component='h2'
          textAlign='center'
          fontSize='24px'
          fontWeight='500'
          color='primary'
          mb='30px'
        >
          Let's test your memory!
        </Typography>
        <Groups variant='test' />
        {testGroup && <TestPlace />}
      </Box>

    )
    : (<Empty text='test' />);
};

export default Test;
