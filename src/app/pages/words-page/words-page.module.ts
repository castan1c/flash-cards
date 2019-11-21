import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WordsPageComponent } from 'src/app/pages/words-page/words-page.component';
import { WordsComponent } from 'src/app/components/words/words.component';

const routes: Routes = [
  {
    path: 'words',
    component: WordsComponent
  }
];

@NgModule({
  declarations: [
    WordsComponent,
    WordsPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    WordsComponent,
    WordsPageComponent,
    RouterModule
  ]
})
export class WordsPageModule { }
