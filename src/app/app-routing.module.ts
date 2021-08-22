import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path: 'tasks', component: TaskComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
