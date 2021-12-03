import { UserCartComponent } from './user-cart/user-cart.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';


const routes: Routes = [
  {
    path: 'home', component: StoreComponent, canActivate: [RouteGuardService]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },

  {
    path: 'users', component: UsersComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'users/:id/cart', component: UserCartComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
