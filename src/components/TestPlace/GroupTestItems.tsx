import { useSelector } from 'react-redux';
import TestItem from './TestItem';
import { StoreType } from '../../types/types';

const GroupTestItems = ({ swapped } : { swapped: boolean }) => {
  const testWords = useSelector((state: StoreType) => state.testingWords);

  return testWords?.map((word) => {
    return !swapped ? (
      <TestItem
        key={word.id}
        word={word.word}
        translation={word.translateWord}
      />
    )
      : (
        <TestItem
          key={word.id}
          word={word.translateWord}
          translation={word.word}
        />
      );
  });
};

export default GroupTestItems;
