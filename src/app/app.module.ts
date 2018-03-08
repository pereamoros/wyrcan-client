import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//Pages
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileIdComponent } from './pages/profile-id/profile-id.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobsIdComponent } from './pages/jobs-id/jobs-id.component';
import { CreateJobComponent } from './pages/create-job/create-job.component';
import { ArchivedComponent } from './pages/archived/archived.component';
import { AppliedJobsComponent } from './pages/applied-jobs/applied-jobs.component';
import { CandidatePageComponent } from './pages/candidate-page/candidate-page.component';
//Components
import { AddJobComponent } from './components/add-job/add-job.component';
import { ApplicantCardComponent } from './components/applicant-card/applicant-card.component';
import { ArchivedJobComponent } from './components/archived-job/archived-job.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { JobAppliedCardComponent } from './components/job-applied-card/job-applied-card.component';
//Services
import { AuthService } from './services/auth.service';
import { JobsService } from './services/jobs.service';
//Guards
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
//Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
//Routes
const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService, RequireAnonGuardService ] },
  { path: 'login',  component: LoginFormComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignupFormComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'profile',  component: ProfilePageComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'profile/:id',  component: ProfileIdComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'my-jobs',  component: MyJobsComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'my-jobs/create',  component: CreateJobComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'my-jobs/archived',  component: ArchivedComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'jobs',  component: JobsComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'jobs/applied',  component: AppliedJobsComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'jobs/:id',  component: JobsIdComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'jobs/:id/candidate/:userId',  component: CandidatePageComponent , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    ApplicantCardComponent,
    CreateJobComponent,
    HomePageComponent,
    JobsComponent,
    JobCardComponent,
    JobsIdComponent,
    LoginFormComponent,
    MyJobsComponent,
    NavbarComponent,
    ProfilePageComponent,
    ProfileIdComponent,
    ProfileInfoComponent,
    SignupFormComponent,
    FilterPipe,
    AddJobComponent,
    ArchivedComponent,
    ArchivedJobComponent,
    AppliedJobsComponent,
    JobAppliedCardComponent,
    CandidatePageComponent,
    EmptyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AuthService,
    JobsService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
