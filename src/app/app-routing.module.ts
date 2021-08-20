import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { TaskComponent } from './components/task/task.component';
import { SignComponent } from './components/sign/sign.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tasks', component: TaskComponent},
  {path: 'sign', component: SignComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'login', component: LoginComponent},
  {path: ''||'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
