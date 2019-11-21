import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordsPageModule } from './pages/words-page/words-page.module';
import { WordsPageComponent } from './pages/words-page/words-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/words', pathMatch: 'full' },
  { path: 'words', component: WordsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
