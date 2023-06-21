import {
  Box, Stack, Typography, Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.scss';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        padding: '20px 10px',
      }}
    >
      <Stack direction='row' justifyContent="space-between" alignItems="center">
        <Typography fontSize='18px' fontWeight='500'> 2023 </Typography>
        <Stack
          direction='row'
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Link
            href='https://github.com/pedanmax'
            target='_blank'
            underline="none"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#01012d',
              fontWeight: '500',
              transition: 'all 0.3s',
              '&.MuiLink-underlineNone:hover': {
                transform: 'rotate(3deg)',
              },
            }}
            variant='button'
          >
            <GitHubIcon />
            Github
          </Link>
          <Link
            href='https://www.linkedin.com/in/maksym-pedan-0932ab253/'
            target='_blank'
            underline="none"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#01012d',
              fontWeight: '500',
              transition: 'all 0.3s',
              '&.MuiLink-underlineNone:hover': {
                transform: 'rotate(3deg)',
              },
            }}
            variant='button'
          >
            <LinkedInIcon />
            Linkedin
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
