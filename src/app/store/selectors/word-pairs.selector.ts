import { createSelector } from '@ngrx/store';
import { IState } from '../reducers/wordPairs.reducer';
import { getWordPairsArray } from './app.selectors';

export const getWordPairs = createSelector(
  getWordPairsArray,
  (state: IState) => state.wordPairs
);
