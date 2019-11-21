import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WordsPageModule } from 'src/app/pages/words-page/words-page.module';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    WordsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
