import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ShopListComponent } from './shop-list/shop-list.component'
import { ShopDetailComponent } from './shop-detail/shop-detail.component'
import { AuthenticationGuard } from './authentication.guard'
 
const routes: Routes = [
  { path: '',component : HomeComponent},
  { path: 'login',component : LoginComponent},
  { path: 'register',component : RegisterComponent},
  { path: 'shoplist',component : ShopListComponent,canActivate:[AuthenticationGuard]},
  { path: 'shoplist/:name',component : ShopDetailComponent},
  { path: '**',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
