import { Stack } from '@mui/material';
import LearnTranslate from './LearnTranslate';
import LearnWord from './LearnWord';

export type LearnItemProps = {
  left: string,
  right: string,
  id: number,
  visible: boolean,
};

const LearnItem = ({ left, right, id, visible } : LearnItemProps) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
    >
      <LearnWord wordOriginal={left} />
      <LearnTranslate translate={right} id={id} visible={visible} />
    </Stack>
  );
};

export default LearnItem;
