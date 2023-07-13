import { IconButton, Stack } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import LearnTranslate from './LearnTranslate';
import LearnWord from './LearnWord';
import { actions } from '../../Redux/reducers/words.slice';
import { actions as setActiveGroup } from '../../Redux/reducers/activeGroup.slice';
import { StoreType } from '../../types/types';

export type LearnItemProps = {
  left: string,
  right: string,
  id: number,
  visible: boolean,
};

const LearnItem = ({ left, right, id, visible } : LearnItemProps) => {
  const dispatch = useDispatch();
  const allWords = useSelector((state:StoreType) => state.words);
  const activeGroup = useSelector((state:StoreType) => state.activeGroup);
  const words = allWords?.filter((word) => word.group === activeGroup);

  const removeWord = () => {
    dispatch(actions.removeWord(id));
    if (words?.length === 1) {
      dispatch(setActiveGroup.setActiveGroup(''));
      dispatch(actions.removeWord(id));
      localStorage.setItem('activeGroup', '');
    }
  };

  const toggleVisibility = () => dispatch(actions.visibilityWord(id));
  return (
    <Stack
      direction='row'
      padding="10px 0"
      borderBottom='1px solid #c4c4c4'
      sx={{
        flexWrap: {
          xs: 'wrap',
          sm: 'nowrap',
        },
        justifyContent: {
          xs: 'flex-end',
        },
      }}
    >
      <LearnWord wordOriginal={left} />
      <LearnTranslate translate={right} visible={visible} />
      <Stack
        direction='row'
        width='70px'
      >
        <IconButton size='small' color='primary' onClick={removeWord}>
          <HighlightOffIcon />
        </IconButton>
        <IconButton size='small' color='primary' onClick={toggleVisibility}>
          {visible ? <VisibilityIcon /> : <VisibilityOffIcon /> }
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default LearnItem;
