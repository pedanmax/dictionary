import { Stack, Typography } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const LearnWord = ({ wordOriginal } : { wordOriginal: string }) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      flex='0 1 40%'
    >
      <Typography
        sx={{
          flex: '1 1 auto',
          padding: '5px 0px',
          fontSize: {
            xs: '14px',
            sm: '16px',
          },
          wordBreak: 'break-all',
        }}
        textAlign='center'
      >
        {wordOriginal}
      </Typography>
      <HorizontalRuleIcon color='primary' />
    </Stack>
  );
};

export default LearnWord;
