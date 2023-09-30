import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

const adminRoutes: Routes = [
  { path: '',  component: AdminComponent },
  { path  : 'login', component : LoginComponent}
];

export const adminRouting = RouterModule.forChild(adminRoutes);

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    adminRouting
  ]
})
export class AdminModule { }
