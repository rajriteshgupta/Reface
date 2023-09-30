import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SellerComponent } from './seller.component';
import { LoginComponent } from './login/login.component';

const sellerRoutes: Routes = [
  { path: '',  component: SellerComponent },
  { path  : 'login', component : LoginComponent}
];

export const sellerRouting = RouterModule.forChild(sellerRoutes);

@NgModule({
  declarations: [
    SellerComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    sellerRouting
  ]
})
export class SellerModule { }
