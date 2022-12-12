import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './authguard';
import { HomePageComponent } from './home-page/home-page.component';
import { GraphsComponent } from './graphs/graphs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupsComponent } from './groups/groups.component';
import { ActuatorsComponent } from './actuators/actuators.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
    {path:'home', component: HomePageComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'actuators', component: ActuatorsComponent
      },{
      path: 'graphs', component: GraphsComponent
    },
    {
      path: 'dashboard', component: DashboardComponent
    },
    {
      path: 'groups', component: GroupsComponent
    }
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
