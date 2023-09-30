import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  {path:"admin", loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path:"seller", loadChildren: () => import('./modules/seller/seller.module').then(m => m.SellerModule)},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
