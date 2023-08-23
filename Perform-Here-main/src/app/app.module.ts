import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { PerformerFormComponent } from './performer-form/performer-form.component';
import { BrowsingContentComponent } from './browsing-content/browsing-content.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SuccessComponent } from './success/success.component';
import { StatsTableComponent } from './stats-table/stats-table.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    LandingContentComponent,
    PerformerFormComponent,
    BrowsingContentComponent,
    NavbarContentComponent,
    ProfileComponent,
    SuccessComponent,
    StatsTableComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
