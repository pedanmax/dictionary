import { useState } from 'react';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { WordType, StoreType } from '../../types/types';
import Group from './Group';

export type Array = WordType[];

const Groups = () => {
  const words = useSelector((state: StoreType) => state.words);
  const groupsName = [...new Set(words?.map((word) => (word.group)))];
  const groups = groupsName.map((group) => words?.filter((word) => word.group === group));

  return (
    <Stack
      direction='row'
      spacing='4'
      flexWrap='wrap'
      gap='20px'
      justifyContent='center'
    >
      {groups.length > 0 && groups.map((group) => {
        return (
          <Group
            key={Math.floor(Math.random() * 100)}
            group={group && group[0].group}
            count={group && group.length}
          />
        );
      })}
    </Stack>
  );
};

export default Groups;
