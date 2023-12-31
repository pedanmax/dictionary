import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { StoreType } from '../../types/types';
import Group from './Group';

const Groups = ({ variant } : { variant : string }) => {
  const words = useSelector((state: StoreType) => state.words);
  // array with groups names
  const groupsName = [...new Set(words?.map((word) => (word.group)))];
  // array filtered by group
  const groups = groupsName.map((group) => {
    return words?.filter((word) => word.group === group);
  });

  return (
    <Stack
      direction='row'
      spacing='4'
      flexWrap='wrap'
      gap='20px'
      justifyContent='center'
      mb='30px'
    >
      {groups.length > 0 && groups.map((group, index) => {
        return (
          <Group
            key={index}
            group={group && group[0].group}
            count={group && group.length}
            variant={variant}
          />
        );
      })}
    </Stack>
  );
};

export default Groups;
