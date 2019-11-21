import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { IWordPair } from 'src/app/interfaces/word-pair.interface';
import { IAppState } from 'src/app/store/app.store';
import { getWordPairs } from 'src/app/store/selectors/word-pairs.selector';
import { DeleteWordPair, AddWordPair } from 'src/app/store/actions/word-pairs.actions';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  public englishInputWord: string;
  public ukrainianInputWord: string;

  public wordPairs$: Observable<Array<IWordPair>>;

  constructor(private store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.wordPairs$ = this.store.select(getWordPairs);
  }

  public deleteWordPair(wordPair: IWordPair): void {
    this.store.dispatch(new DeleteWordPair(wordPair));
  }

  public submitWordPair(): void {
    if (this.englishInputWord && this.ukrainianInputWord) {
      const newPair = {
        englishWord: this.englishInputWord,
       ukrainianWord: this.ukrainianInputWord
      };

      this.store.dispatch(new AddWordPair(newPair));
    } else {
      alert('Please fill all the forms!');
    }
  }

}
