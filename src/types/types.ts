export type StoreType = {
  words?: [WordType],
  activeGroup: string,
  testGroup: string,
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
