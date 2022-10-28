import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormComponent } from './Component/registration-form/registration-form.component';
import { LoginFormComponent } from './Component/login-form/login-form.component';
import { HomeComponent } from './Component/home/home.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { BoardUserComponent } from './Component/board-user/board-user.component';
import { BoardAdminComponent } from './Component/board-admin/board-admin.component';
import { AddRestoComponent } from './Component/add-resto/add-resto.component';
import { UpdateRestoComponent } from './Component/update-resto/update-resto.component';
import { AllRestoComponent } from  './Component/all-resto/all-resto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin/add', component: AddRestoComponent },
  { path: 'admin/update', component: UpdateRestoComponent },
  { path: 'user/all', component: AllRestoComponent },
  { path: 'admin/all', component: AllRestoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
