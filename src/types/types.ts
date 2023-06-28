export type StoreType = {
  words?: [WordType],
  activeGroup: string,
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
};

export type NavigationProps = {
  closeDrawer?: () => void;
};
