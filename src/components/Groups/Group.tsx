import { Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../Redux/reducers/activeGroup.slice';
import { StoreType } from '../../types/types';

export type GroupProps = {
  group: string | undefined,
  count: number | undefined,
};

const Group = ({ group, count } : GroupProps) => {
  const dispatch = useDispatch();
  const activeGroup = useSelector((state: StoreType) => state.activeGroup);
  const active = activeGroup === group;
  const handleActiveGroup = () => {
    dispatch(actions.setActiveGroup(group));
    localStorage.setItem('activeGroup', group || '');
  };

  return (
    <Card
      sx={{
        maxWidth: '150px',
        position: 'relative',
        boxShadow: active ? '0px 0px 10px 0px #01012d' : '0',
        transition: 'all 0.3s ease',
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
        <Button
          onClick={handleActiveGroup}
          size='small'
          variant='contained'
          sx={{ '&.MuiButton-root': { backgroundColor: '#004668' }, '&.MuiButton-root:hover': { backgroundColor: '#003954' } }}
        >
          Select
        </Button>
        <Button size='small' variant='contained' sx={{ '&.MuiButton-root': { backgroundColor: '#004668' }, '&.MuiButton-root:hover': { backgroundColor: '#003954' } }}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default Group;
