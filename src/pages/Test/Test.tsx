/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux';
import { Stack, Typography } from '@mui/material';
import Empty from '../../components/Empty/Empty';
import Groups from '../../components/Groups/Groups';
import './Test.scss';
import { StoreType } from '../../types/types';

const Test = () => {
  const words = useSelector((state: StoreType) => state.words);
  return words?.length
    ? (
      <Stack
        spacing={2}
      >
        <Typography
          component='h2'
          textAlign='center'
          fontSize='24px'
          fontWeight='500'
          color='primary'
        >
          Let's test your memory!
        </Typography>
        <Groups variant='test' />
      </Stack>
    )
    : (<Empty text='test' />);
};

export default Test;
