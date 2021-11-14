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
import { AdminAuthService } from './auth/adminAuth.service';
import { CourseService } from './services/course.service';
import { UpdateCoursesComponent } from './users/components/update-courses/update-courses.component';
import { CreateCourseComponent } from './users/components/create-course/create-course.component';
import { UpdateMarksComponent } from './users/components/update-marks/update-marks.component';
import { TeacherCourses } from './users/model/teacher-courses';
import { CourseDetailsComponent } from './users/components/course-details/course-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:courseId', component: CourseDetailsComponent },
  { path: 'teacher-courses', component: TeacherCourses },
  { path: 'update-course/:courseId', component: UpdateCoursesComponent },
  { path: 'marks', component: MarksComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:userId', component: UserDetailsComponent },
  {
    path: 'create-course',
    component: CreateCourseComponent,
    canActivate: [AdminAuthService],
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [AdminAuthService],
  },
  { path: 'update-user/:userId', component: UpdateUserComponent },
  { path: 'search/:keyword', component: UsersComponent },
  { path: 'role/:roleId', component: UsersComponent },
  { path: 'role', component: UsersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },
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
    CoursesComponent,
    CreateCourseComponent,
    UpdateCoursesComponent,
    MarksComponent,
    UpdateMarksComponent,
    UpdateCoursesComponent,
    UpdateMarksComponent,
    CourseDetailsComponent,
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
  providers: [UsersService, CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
