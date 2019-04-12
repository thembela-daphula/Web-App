import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListComponent } from './list/list.component';
import { ProjectComponent } from './project/project.component';
import { LeaveComponent } from './leave/leave.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
=======
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { ProjectsComponent } from './projects/projects.component';
>>>>>>> b5033411f4347c68b9d9eb459189546badf6d867

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    CreateComponent,
    LoginComponent,
    NavComponent,
    ListComponent,
    ProjectComponent,
    LeaveComponent,
    CreateProjectComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
=======
    HomepageComponent,
    LoginComponent,
    CreateComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> b5033411f4347c68b9d9eb459189546badf6d867
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
