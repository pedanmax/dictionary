import { useSelector } from 'react-redux';
import TestItem from './TestItem';
import { StoreType } from '../../types/types';

const GroupTestItems = () => {
  const testWords = useSelector((state: StoreType) => state.testingWords);

  return testWords?.map((word) => {
    return (
      <TestItem
        key={word.id}
        word={word.word}
        translation={word.translateWord}
      />
    );
  });
};

export default GroupTestItems;
