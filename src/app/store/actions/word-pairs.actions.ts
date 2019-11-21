import { Action } from '@ngrx/store';
import { IWordPair } from 'src/app/interfaces/word-pair.interface';

export enum WordPairsActionTypes {
  SetWordPairs = '[Word Pairs] Loaded word pairs into store',
  DeleteWordPair = '[Word Pairs] Deleted a word pair',
  AddWordPair = '[Word Pairs] Added a word pair',
  ClearWordPairs = '[Word Pairs] Cleared'
}

export class SetWordPairs implements Action {
  constructor(public readonly payload: Array<IWordPair>) { }

  public static readonly TYPE = WordPairsActionTypes.SetWordPairs;
  public type = SetWordPairs.TYPE;
}

export class DeleteWordPair implements Action {
  constructor(public readonly payload: IWordPair) { }

  public static readonly TYPE = WordPairsActionTypes.DeleteWordPair;
  public type = DeleteWordPair.TYPE;
}

export class AddWordPair implements Action {
  constructor(public readonly payload: IWordPair) { }

  public static readonly TYPE = WordPairsActionTypes.AddWordPair;
  public type = AddWordPair.TYPE;
}

export class ClearWordPairs implements Action {
  public static readonly TYPE = WordPairsActionTypes.ClearWordPairs;
  public type = ClearWordPairs.TYPE;
}

