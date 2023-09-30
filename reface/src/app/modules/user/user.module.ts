import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  { path: '',  component: DashboardComponent },
  { path  : 'login', component : LoginComponent}
];

export const userRouting = RouterModule.forChild(userRoutes);

@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    userRouting
  ],
  exports:[
    UserComponent,
    DashboardComponent
  ]
})
export class UserModule { }
