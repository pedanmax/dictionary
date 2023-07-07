/* eslint-disable import/prefer-default-export */
import { WordType } from '../types/types';

export const shuffleArray = (array: WordType[] | undefined) => {
  if (!array) return [];
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
