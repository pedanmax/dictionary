import { useDispatch } from 'react-redux';
import { Typography, ListItem, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { actions } from '../../Redux/reducers/words.slice';

const Word = ({ word, id } : { word: string, id: number }) => {
  const dispatch = useDispatch();
  const removeWord = () => dispatch(actions.removeWord(id));
  return (
    <ListItem
      sx={{
        width: 'auto', padding: '0px', transition: 'all 1s ease', opacity: '1',
      }}
    >
      <Typography>
        {word}
      </Typography>
      <IconButton onClick={removeWord} size='small' color='primary'>
        <HighlightOffIcon />
      </IconButton>
    </ListItem>
  );
};

export default Word;
