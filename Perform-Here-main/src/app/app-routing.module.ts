import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';
import { SignInComponent } from 'src/app/auth/sign-in/sign-in.component';
import { PerformerFormComponent } from './performer-form/performer-form.component';
import { LandingContentComponent } from './landing-content/landing-content.component'
import { BrowsingContentComponent } from './browsing-content/browsing-content.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { ProfileComponent } from './profile/profile.component';
import { CognitoService } from './cognito.service';
import { SuccessComponent } from './success/success.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:LandingContentComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },

  { path: 'navbar-content', component: NavbarContentComponent },

  { 
    path: 'browse',
    component: BrowsingContentComponent,
    canActivate:[CognitoService],
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate:[CognitoService],
  },
  { 
    path: 'performer_form', 
    component: PerformerFormComponent
  },
  {
    path: 'success',
    component: SuccessComponent,
    canActivate: [CognitoService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
