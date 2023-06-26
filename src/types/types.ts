export type StoreType = {
  words: [WordType],
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
