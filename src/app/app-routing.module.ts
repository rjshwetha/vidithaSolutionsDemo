import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {path:'',component:AdminloginComponent,pathMatch: 'full'},
  {path:'createUser',component:CreateUserComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
