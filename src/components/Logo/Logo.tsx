import { Box, Typography } from '@mui/material';
import icon from '../../assets/book.png';
import './Logo.scss';

const Logo = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: '10px',
    }}
    >
      <Typography
        sx={{ color: '#111a35', fontWeight: '700', fontSize: '18px' }}
        align='center'
      >
        Learn Words
      </Typography>
      <img src={icon} alt="title-icon" className="title-icon" />
    </Box>
  );
};

export default Logo;
