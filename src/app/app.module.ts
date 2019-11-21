import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
