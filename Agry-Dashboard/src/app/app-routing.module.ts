import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAgryComponent } from './admin-agry/admin-agry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MAdminComponent } from './m-admin/m-admin.component';
import { MPlantComponent } from './m-plant/m-plant.component';
import { MUserComponent } from './m-user/m-user.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full'},
  { path: 'AdminPanel', redirectTo: 'Mplant', pathMatch: 'full'},
  { path: 'AdminPanel', component: AdminAgryComponent },
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'MAdmin', component: MAdminComponent},
  { path: 'Mplant', component: MPlantComponent},
  { path: 'MUser', component: MUserComponent},
  { path: 'DModel', component: DetailModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
