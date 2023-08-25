import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch:'full'},
  {path: 'sign-in' , component: SignInComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'register-user', component: SignUpComponent},
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
