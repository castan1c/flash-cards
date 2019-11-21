import { createSelector } from '@ngrx/store';
import { IState } from '../reducers/word-pairs.reducer';
import { getWordPairsArray } from './app.selectors';

export const getWordPairs = createSelector(
  getWordPairsArray,
  (state: IState) => state.wordPairs
);
