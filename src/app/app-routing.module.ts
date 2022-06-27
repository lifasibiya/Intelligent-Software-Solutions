import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DeleteComponent } from './components/delete/delete.component';
import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { 
    path: '',
    component: SummaryComponent,
    pathMatch: 'full'
  },
  { path: 'summary', component: SummaryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'create-user', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
