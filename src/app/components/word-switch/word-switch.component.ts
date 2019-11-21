import { Component, OnInit, Input } from '@angular/core';
import { IWordPair } from 'src/app/interfaces/word-pair.interface';
import { WordLanguages } from 'src/app/app.enum';

@Component({
  selector: 'app-word-switch',
  templateUrl: './word-switch.component.html',
  styleUrls: ['./word-switch.component.scss']
})
export class WordSwitchComponent implements OnInit {
  @Input() public wordPair: IWordPair;

  private currentWordLanguage: WordLanguages;

  constructor() { }

  ngOnInit() {
    this.currentWordLanguage = WordLanguages.ENG;
  }

  public getWordToDisplay(): string {
    return this.currentWordLanguage === WordLanguages.ENG
      ? this.wordPair.englishWord
      : this.wordPair.ukrainianWord;
  }

  public changeLanguage(): void {
    this.currentWordLanguage = this.currentWordLanguage === WordLanguages.ENG
      ? WordLanguages.UA
      : WordLanguages.ENG;
  }

}
