/* eslint-disable max-len */
import { Typography, Stack, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Redux/reducers/words.slice';
import { actions as setActiveGroup } from '../../Redux/reducers/activeGroup.slice';
import { StoreType } from '../../types/types';

type LearnTranslateProps = {
  translate: string,
  id: number,
  visible: boolean,
};

const LearnTranslate = ({ translate, id, visible } : LearnTranslateProps) => {
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
      alignItems='flex-start'
      flex='0 1 60%'
    >
      <Typography
        sx={{
          transition: 'all .6s ease',
          opacity: visible ? '1' : '0',
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
        {translate}
      </Typography>
      <Stack
        direction='row'
        width='70px'
      >
        <IconButton size='small' onClick={removeWord} color='primary'>
          <HighlightOffIcon />
        </IconButton>
        <IconButton size='small' onClick={toggleVisibility} color='primary'>
          {visible ? <VisibilityIcon /> : <VisibilityOffIcon /> }
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default LearnTranslate;
