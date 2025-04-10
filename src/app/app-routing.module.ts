import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'dialog', component: DialogComponent},
  {path:'header', component: HeaderComponent},
  {path:'login', component: LoginComponent},
  {path:'sign', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
