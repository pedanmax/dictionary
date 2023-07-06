import { Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { actions as setActiveGroup } from '../../Redux/reducers/activeGroup.slice';
import { actions as setTestGroup } from '../../Redux/reducers/testGroup.slice';
import { actions as wordOperations } from '../../Redux/reducers/words.slice';
import { StoreType } from '../../types/types';

export type GroupProps = {
  group: string | undefined,
  count: number | undefined,
  variant: string,
};

const Group = ({ group, count, variant } : GroupProps) => {
  const dispatch = useDispatch();
  const activeGroup = useSelector((state: StoreType) => state.activeGroup);
  const testGroup = useSelector((state: StoreType) => state.testGroup);
  const allWords = useSelector((state: StoreType) => state.words);
  const active = activeGroup === group;
  const test = testGroup === group;

  // set testing group by click 'test' button
  const handleTestGroup = () => {
    dispatch(setTestGroup.setTestGroup(group));
  };
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

  // change shadow depending on the type of group
  let shadow;
  if (variant === 'learn') {
    shadow = active ? '0px 0px 10px 0px #01012d' : '0';
  } else shadow = test ? '0px 0px 10px 0px #01012d' : '0';

  return (
    <Card
      sx={{
        width: '150px',
        position: 'relative',
        boxShadow: shadow,
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
      {variant === 'learn'
        ? (
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
        )
        : (
          <CardActions>
            <Button
              onClick={() => handleTestGroup()}
              size='small'
              variant='contained'
              fullWidth
              sx={{ '&.MuiButton-root': { backgroundColor: '#004668' }, '&.MuiButton-root:hover': { backgroundColor: '#003954' } }}
            >
              Test
            </Button>
          </CardActions>
        )}

    </Card>
  );
};

export default Group;
