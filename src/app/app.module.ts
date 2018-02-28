import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//Pages
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
//Components
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
//Services
import { AuthService } from './services/auth.service';
//Guards
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
//Pipes
//Routes
const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService, RequireAnonGuardService ] },
  { path: 'login',  component: LoginFormComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignupFormComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'profile',  component: ProfilePageComponent , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginFormComponent,
    SignupFormComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AuthService, InitAuthGuardService, RequireAnonGuardService, RequireUserGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
