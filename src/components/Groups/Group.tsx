import { Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

export type GroupProps = {
  group: string | undefined,
  count: number | undefined,
};

const Group = ({ group, count } : GroupProps) => {
  return (
    <Card
      sx={{
        maxWidth: '150px',
        position: 'relative',
      }}
    >
      <CardContent>
        <Typography
          textAlign='center'
        >
          Group:
        </Typography>
        <Typography
          textAlign='center'
          fontWeight='700'
          sx={{ wordWrap: 'break-word' }}
        >
          {group}
        </Typography>
        <Typography
          fontSize='12px'
          fontWeight='500'
          sx={{
            position: 'absolute',
            right: '5px',
            top: '0px',
            opacity: '0.5',
          }}
        >
          {count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained' sx={{ '&.MuiButton-root': { backgroundColor: '#004668' }, '&.MuiButton-root:hover': { backgroundColor: '#003954' } }}>Select</Button>
        <Button size='small' variant='contained' sx={{ '&.MuiButton-root': { backgroundColor: '#004668' }, '&.MuiButton-root:hover': { backgroundColor: '#003954' } }}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default Group;
