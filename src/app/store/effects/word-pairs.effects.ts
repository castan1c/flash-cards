import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DeleteWordPair, AddWordPair, ClearWordPairs } from '../actions/word-pairs.actions';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable()
export class WordPairsEffects {
  constructor(
    private actions$: Actions,
    private localStorage: LocalStorageService
  ) { }

  @Effect({ dispatch: false })
  public addToLocalStorage$: Observable<any> = this.actions$
    .pipe(
      ofType(
        DeleteWordPair.TYPE,
        AddWordPair.TYPE,
        ClearWordPairs.TYPE
      ),
      tap(() => console.log('i worked')),
      tap(() => this.localStorage.saveDataToLocalStorage()),
    );
}
