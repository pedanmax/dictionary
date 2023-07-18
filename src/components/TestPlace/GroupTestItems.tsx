/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import TestItem from './TestItem';
import { StoreType } from '../../types/types';

const GroupTestItems = ({ swapped, isHighlighted } : { swapped: boolean, isHighlighted: boolean }) => {
  const testWords = useSelector((state: StoreType) => state.testingWords);
  // console.log(testWords);
  return testWords?.map((word) => {
    return !swapped ? (
      <TestItem
        key={word.id}
        word={word.word}
        translation={word.translateWord}
        isHighlighted={isHighlighted}
      />
    )
      : (
        <TestItem
          key={word.id}
          word={word.translateWord}
          translation={word.word}
          isHighlighted={isHighlighted}
        />
      );
  });
};

export default GroupTestItems;
