import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CardsPageComponent } from './cards-page.component';
import { CardsComponent } from 'src/app/components/cards/cards.component';

const routes: Routes = [
  {
    path: 'cards',
    component: CardsPageComponent
  }
];

@NgModule({
  declarations: [
    CardsPageComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CardsPageComponent,
    CardsComponent,
    RouterModule
  ]
})
export class CardsPageModule { }
