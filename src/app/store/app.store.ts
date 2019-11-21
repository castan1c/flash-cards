import { ActionReducerMap } from '@ngrx/store';
import * as fromWordPairs from './reducers/wordPairs.reducer';

export interface IAppState {
  wordPairs: fromWordPairs.IState;
}

export const appReducer: ActionReducerMap<IAppState> = {
  wordPairs: fromWordPairs.wordPairsReducer
};
