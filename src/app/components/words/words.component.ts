import { Component, OnInit } from '@angular/core';
import { WordPair } from 'src/app/interfaces/word-pair.interface';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  public englishInputWord: string;
  public ukrainianInputWord: string;

  wordPairs: Array<WordPair> = [
    { englishWord: 'Hi', ukrainianWord: 'Привіт' },
    { englishWord: 'Mouse', ukrainianWord: 'Миша' },
    { englishWord: 'House', ukrainianWord: 'Дім' },
  ];

  constructor() { }

  ngOnInit() {
  }

  public deleteWordPair(wordPair: WordPair): void {
    const wordIndex = this.wordPairs.indexOf(wordPair);

    this.wordPairs.splice(wordIndex, 1);
  }

  public submitWordPair(): void {
    if (this.englishInputWord && this.ukrainianInputWord) {
      const newPair = { englishWord: this.englishInputWord, ukrainianWord: this.ukrainianInputWord };

      this.wordPairs.push(newPair);
    } else {
      alert('Please!');
    }
  }

}
