import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthService } from './services/auth.service';
import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { FilmDetailPageComponent } from './pages/film-detail-page/film-detail-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ReviewPageComponent } from './pages/review-page/review-page.component';
import { E404Component } from './pages/e404/e404.component';

const routes: Routes = [
  { path: '',  component: FilmsPageComponent, canActivate: [ RequireUserGuard ] },
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'films',  component: FilmsPageComponent , canActivate: [ RequireUserGuard ] },
  { path: 'films/:id',  component: FilmDetailPageComponent , canActivate: [ RequireUserGuard ] },
  { path: 'search',  component: SearchPageComponent , canActivate: [ RequireUserGuard ] },
  { path: 'review/:id',  component: ReviewPageComponent , canActivate: [ RequireUserGuard ] },
  { path: '**', component: E404Component }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    FilmsPageComponent,
    FilmDetailPageComponent,
    SearchPageComponent,
    ReviewPageComponent,
    E404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    InitAuthGuard,
    RequireAnonGuard,
    RequireUserGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
