import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordsPageModule } from './pages/words-page/words-page.module';
import { CardsPageModule } from './pages/cards-page/cards-page.module';

const routes: Routes = [
  { path: '', redirectTo: '/words', pathMatch: 'full' },
  { path: 'words', loadChildren: () => WordsPageModule },
  { path: 'cards', loadChildren: () => CardsPageModule }
];

@NgModule({
  imports: [
    CardsPageModule,
    WordsPageModule,
    RouterModule.forRoot(routes)],
  exports: [
    WordsPageModule,
    CardsPageModule,
    RouterModule
  ]
})
export class AppRoutes { }
