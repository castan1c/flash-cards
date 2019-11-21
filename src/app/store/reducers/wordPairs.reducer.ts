import { IWordPair } from '../../interfaces/word-pair.interface';

import {
  SetWordPairs, DeleteWordPair, AddWordPair, ClearWordPairs
} from '../actions/wordPairs.actions';

export interface IState {
  wordPairs: Array<IWordPair>;
}

export const initialState: IState = {
  wordPairs: [
    { id: 0, englishWord: 'Hi', ukrainianWord: 'Привіт' },
    { id: 1, englishWord: 'Mouse', ukrainianWord: 'Миша' },
    { id: 3, englishWord: 'House', ukrainianWord: 'Дім' },
  ]
};

export function wordPairsReducer(state = initialState, action: any): IState {
  const { type, payload } = action;

  switch (type) {
    case SetWordPairs.TYPE:
      return {
        ...state,
        wordPairs: payload
      };
    case DeleteWordPair.TYPE: {
      const newPairs = state.wordPairs;
      const idToDelete = newPairs.indexOf(payload);
      newPairs.splice(idToDelete, 1);

      console.log(payload);

      return {
        ...state,
        wordPairs: newPairs
      };
    }
    case AddWordPair.TYPE: {
      const newId = state.wordPairs.length
        ? Math.max(...state.wordPairs.map(el => el.id)) + 1
        : 0;
      const newPair = { ...payload, id: newId };

      return {
        ...state,
        wordPairs: [...state.wordPairs, newPair]
      };
    }
    case ClearWordPairs.TYPE:
      return {
        ...state,
        wordPairs: []
      };
    default: return state;
  }
}
