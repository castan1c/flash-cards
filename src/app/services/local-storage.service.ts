import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LocalStorageKeys } from 'src/app/app.enum';
import { IAppState } from '../store/app.store';
import { SetWordPairs } from '../store/actions/word-pairs.actions';
import { getWordPairs } from '../store/selectors/word-pairs.selector';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public getPairsSub: Subscription;

  constructor(private store: Store<IAppState>) {
    this.loadDataFromLocalStorage();
   }

  public loadDataFromLocalStorage(): void {
    const data = JSON.parse(localStorage.getItem(LocalStorageKeys.WordPairs)) || [];

    this.store.dispatch(new SetWordPairs(data));
  }

  public saveDataToLocalStorage(): void {
    this.getPairsSub = this.store.select(getWordPairs)
      .subscribe(data =>
        localStorage.setItem(LocalStorageKeys.WordPairs, JSON.stringify(data))
      );

  }
}
