import { Stack } from '@mui/material';
import LearnTranslate from './LearnTranslate';
import LearnWord from './LearnWord';

export type LearnItemProps = {
  left: string,
  right: string,
  visible: boolean,
  id: number,
};

const LearnItem = ({ left, right, visible, id } : LearnItemProps) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
    >
      <LearnWord wordOriginal={left} />
      <LearnTranslate translate={right} visible={visible} id={id} />
    </Stack>
  );
};

export default LearnItem;
