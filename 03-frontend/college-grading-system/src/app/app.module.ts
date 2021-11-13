import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './users/components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { RoleCategoryComponent } from './users/components/role-category/role-category.component';
import { SearchComponent } from './users/components/search/search.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateUserComponent } from './users/components/create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './users/components/update-user/update-user.component';
import { CoursesComponent } from './users/components/courses/courses.component';
import { MarksComponent } from './users/components/marks/marks.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'marks', component: MarksComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:userId', component: UserDetailsComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user/:userId', component: UpdateUserComponent },
  { path: 'search/:keyword', component: UsersComponent },
  { path: 'role/:roleId', component: UsersComponent },
  { path: 'role', component: UsersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },

  /**
   * TODO
   *  {path: 'teacherOnly', component: XYZ, teacherAccess[AuthService] }
   */
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    RoleCategoryComponent,
    SearchComponent,
    UserDetailsComponent,
    CreateUserComponent,
    UpdateUserComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
