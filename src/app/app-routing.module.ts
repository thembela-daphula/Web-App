import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {HomeComponent} from './home/home.component'
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import {ListComponent} from './list/list.component';
import { ProjectComponent } from './project/project.component';
import { LeaveComponent } from './leave/leave.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectListComponent } from './project-list/project-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}

  ,{path:'home',
  component: HomeComponent

  },
  {
    path:'create',
    component: CreateComponent
  },{

    path:'list',
    component: ListComponent
  },{

    path:'project',
    component: ProjectComponent

  },{

    path:'leave',
    component: LeaveComponent
  },{
    path:'Createproject',
    component: CreateProjectComponent
  },{
    path:'ProjectList',
    component: ProjectListComponent
  }

];
=======
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'homepage', component: HomepageComponent}];
>>>>>>> b5033411f4347c68b9d9eb459189546badf6d867

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
