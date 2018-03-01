import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//Pages
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
//Components
import { CreateJobComponent } from './pages/create-job/create-job.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavEmployerComponent } from './components/nav-employer/nav-employer.component';
import { NavStudentComponent } from './components/nav-student/nav-student.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
//Services
import { AuthService } from './services/auth.service';
//Guards
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { JobsService } from './services/jobs.service';
import { JobCardComponent } from './components/job-card/job-card.component';
//Pipes
//Routes
const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService, RequireAnonGuardService ] },
  { path: 'login',  component: LoginFormComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignupFormComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'profile',  component: ProfilePageComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'my-jobs',  component: MyJobsComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'my-jobs/create',  component: CreateJobComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'jobs',  component: JobsComponent , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginFormComponent,
    SignupFormComponent,
    ProfilePageComponent,
    MyJobsComponent,
    NavEmployerComponent,
    NavStudentComponent,
    JobsComponent,
    CreateJobComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AuthService, JobsService, InitAuthGuardService, RequireAnonGuardService, RequireUserGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
