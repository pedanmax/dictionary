import { Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { actions as setActiveGroup } from '../../Redux/reducers/activeGroup.slice';
import { actions as wordOperations } from '../../Redux/reducers/words.slice';
import { StoreType } from '../../types/types';

export type GroupProps = {
  group: string | undefined,
  count: number | undefined,
};

const Group = ({ group, count } : GroupProps) => {
  const dispatch = useDispatch();
  const activeGroup = useSelector((state: StoreType) => state.activeGroup);
  const allWords = useSelector((state: StoreType) => state.words);
  const active = activeGroup === group;

  // set active group by click 'select' button
  const handleActiveGroup = () => {
    dispatch(setActiveGroup.setActiveGroup(group));
  };

  // remove group by click 'remove' button
  const removeGroupFromWords = () => {
    const filteredWords = allWords?.filter((words) => words.group === group);
    filteredWords?.forEach((word) => dispatch(wordOperations.removeWord(word.id)));

    if (active) {
      dispatch(setActiveGroup.setActiveGroup(''));
    }
  };

  return (
    <Card
      sx={{
        maxWidth: '150px',
        position: 'relative',
        boxShadow: active ? '0px 0px 10px 0px #01012d' : '0',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
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
        <Button
          onClick={() => removeGroupFromWords()}
          size='small'
          variant='contained'
          sx={{ '&.MuiButton-root': { backgroundColor: '#004668' }, '&.MuiButton-root:hover': { backgroundColor: '#003954' } }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default Group;
