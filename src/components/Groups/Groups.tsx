import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { WordType, StoreType } from '../../types/types';
import Group from './Group';

export type Array = WordType[];

const Groups = () => {
  const words = useSelector((state: StoreType) => state.words);
  // array with groups names
  const groupsName = [...new Set(words?.map((word) => (word.group)))];
  // array filtered by group
  const groups = groupsName.map((group) => {
    return words?.filter((word) => word.group === group);
  });
  // words from active group

  // const activeGroupArray = words?.filter((word) => word.group === activeGroup);
  return (
    <Stack
      direction='row'
      spacing='4'
      flexWrap='wrap'
      gap='20px'
      justifyContent='center'
    >
      {groups.length > 0 && groups.map((group, index) => {
        return (
          <Group
            key={index}
            group={group && group[0].group}
            count={group && group.length}
          />
        );
      })}
    </Stack>
  );
};

export default Groups;
