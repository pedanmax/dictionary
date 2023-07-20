/* eslint-disable max-len */
import { Typography, Stack } from '@mui/material';
import { LearnTranslateProps } from '../../types/types';

const LearnTranslate = ({ translate, visible } : LearnTranslateProps) => {
  return (
    <Stack
      direction='row'
      alignItems='flex-start'
      flex='0 1 60%'
      sx={{
        flexBasis: {
          xs: '45%',
          sm: '50%',
        },
      }}
    >
      <Typography
        sx={{
          transition: 'all .6s ease',
          // opacity: visible ? '1' : '0',
          flex: '1 1 auto',
          fontSize: {
            xs: '14px',
            sm: '16px',
          },
          wordBreak: 'break-all',
          marginTop: '4px',
          width: '100%',
        }}
        textAlign='center'
      >
        {visible ? translate : '********'}
      </Typography>
    </Stack>
  );
};

export default LearnTranslate;
