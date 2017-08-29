import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { APIService } from './common/api.service';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskEditPageComponent } from './pages/task-edit-page/task-edit-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { UsersService } from "./services/users.service";

const ROUTES = [
  { path: '', component: SignInPageComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'tasks', component: TaskListPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'edit', component: TaskEditPageComponent,
    canActivate: [AuthService],
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    TaskEditPageComponent,
    PageNotFoundComponent,
    SignInPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
	apiURL: 'http://localhost:8080'
      }
    },
    TodoService,
    AppConfiguration,
    AuthService,
    AppDataService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
