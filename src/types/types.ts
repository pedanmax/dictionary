export type TestFields = {
  word: string,
  translation: string,
  inputTranslation: string,
  correct: boolean,
};

export type StoreType = {
  words?: [WordType],
  activeGroup: string,
  testGroup: string,
  testingWords: [WordType] | undefined,
  stateTest: { isStarted: boolean, resultIsOpen: boolean, testFields: any };
  wordsVisibility: boolean,
};

export type SubmitType = {
  word: string,
  translateWord: string,
  group: string,
};

export type WordType = {
  word: string,
  translateWord: string,
  group: string,
  id: number,
  visible:boolean,
};

export type NavigationProps = {
  closeDrawer?: () => void;
};

export type TestItemProps = {
  word: string,
  translation: string,
  isHighlighted: boolean,
};

export type LearnTranslateProps = {
  translate: string,
  visible: boolean,
};

export type GroupProps = {
  group: string | undefined,
  count: number | undefined,
  variant: string,
};

export type LearnItemProps = {
  left: string,
  right: string,
  id: number,
  visible: boolean,
};
