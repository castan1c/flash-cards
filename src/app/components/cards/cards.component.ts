import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Store } from '@ngrx/store';


import { IAppState } from 'src/app/store/app.store';
import { getWordPairs } from 'src/app/store/selectors/word-pairs.selector';
import { IWordPair } from 'src/app/interfaces/word-pair.interface';

@AutoUnsubscribe()
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  public currentWordIndex = 0;
  public wordPairsSub: Subscription;

  private wordPairs: Array<IWordPair>;


  constructor(private store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.wordPairsSub =  this.store.select(getWordPairs)
      .subscribe(res => this.wordPairs = res);
  }

  public ngOnDestroy(): void { }

  public changeWordPair(): void {
    const newIndex = this.currentWordIndex + 1;

    this.currentWordIndex = newIndex < this.wordPairs.length
      ? newIndex
      : 0;
  }
}
