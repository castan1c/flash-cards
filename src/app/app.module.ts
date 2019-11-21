import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { WordPairsEffects } from './store/effects/word-pairs.effects';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { appReducer } from './store/app.store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([WordPairsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
