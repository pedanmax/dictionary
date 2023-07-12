/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, IconButton } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { StoreType } from '../../types/types';
import { actions as wordsActions } from '../../Redux/reducers/words.slice';
import { actions as wordsVisibility } from '../../Redux/reducers/wordsVisibility.slice';
import LearnItem from './LearnItem';

const LearnPlace = () => {
  const [swapped, setSwapped] = useState(false);

  const allWords = useSelector((state:StoreType) => state.words);
  const activeGroup = useSelector((state:StoreType) => state.activeGroup);
  const words = allWords?.filter((word) => word.group === activeGroup);
  const wordsIsShowing = useSelector((state:StoreType) => state.wordsVisibility);

  const dispatch = useDispatch();
  const toggleVisibility = () => {
    if (wordsIsShowing) {
      dispatch(wordsVisibility.setVisibility(true));
    } else {
      dispatch(wordsVisibility.setVisibility(false));
    }
    dispatch(wordsActions.visibilityAllWord(wordsIsShowing));
  };

  // check state all words after close/open one word and change it depending on state
  useEffect(() => {
    const everyVisible = words?.every((word) => word.visible === true);
    const everyHide = words?.every((word) => word.visible === false);
    if (everyVisible) dispatch(wordsVisibility.setVisibility(false));
    if (everyHide) dispatch(wordsVisibility.setVisibility(true));
  });

  return (
    <>
      <Stack
        direction='row'
        columnGap='10px'
        rowGap='10px'
        flexWrap='wrap'
        mb='20px'
        width='100%'
        justifyContent='center'
      >
        <IconButton
          onClick={toggleVisibility}
          color='primary'
        >
          {!wordsIsShowing ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon />}
        </IconButton>
        <IconButton size='small' color='primary' onClick={() => dispatch(wordsActions.shuffleWords())}>
          <ShuffleIcon />
        </IconButton>
        <IconButton size='small' onClick={() => setSwapped((prev) => !prev)} color='primary'>
          <SwapHorizIcon />
        </IconButton>
      </Stack>
      <Stack
        sx={{
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
          boxSizing: 'border-box',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
        alignItems='center'
      >
        <Stack
          direction='column'
          width='100%'
          justifyContent='space-between'
        >
          {words?.map((word) => {
            return swapped
              ? (
                <LearnItem
                  right={word.word}
                  left={word.translateWord}
                  key={word.id}
                  id={word.id}
                  visible={word.visible}
                />
              )
              : (
                <LearnItem
                  right={word.translateWord}
                  left={word.word}
                  key={word.id}
                  id={word.id}
                  visible={word.visible}
                />
              );
          })}
        </Stack>
      </Stack>
    </>
  );
};

export default LearnPlace;
