import { Stack } from '@mui/material';
import Group from './Group';

const Groups = () => {
  return (
    <Stack
      direction='row'
      spacing='4'
      flexWrap='wrap'
      gap='20px'
      justifyContent='center'
    >
      <Group />
      {/* <Group />
      <Group />
      <Group /> */}
    </Stack>
  );
};

export default Groups;
