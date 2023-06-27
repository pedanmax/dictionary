import { Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

export type GroupProps = {
  group: string,
  count: number,
};

const Group = () => {
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
          Sport
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
          7
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained'>Select</Button>
        <Button size='small' variant='contained'>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default Group;
