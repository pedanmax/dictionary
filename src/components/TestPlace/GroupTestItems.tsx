import { useSelector } from 'react-redux';
import TestItem from './TestItem';
import { StoreType } from '../../types/types';
import { shuffleArray } from '../../helpers/functions';

const GroupTestItems = () => {
  const words = useSelector((state: StoreType) => state.words);
  const testGroup = useSelector((state: StoreType) => state.testGroup);
  // const testWords = shuffleArray(words?.filter((word) => word.group === testGroup));
  const testWords = words?.filter((word) => word.group === testGroup);
  return testWords?.map((word) => {
    return (
      <TestItem
        key={word.id}
        id={word.id}
        word={word.word}
        translation={word.translateWord}
      />
    );
  });
};

export default GroupTestItems;
