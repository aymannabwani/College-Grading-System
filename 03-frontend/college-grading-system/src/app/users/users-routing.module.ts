import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { MarksComponent } from './components/marks/marks.component';
import { RoleCategoryComponent } from './components/role-category/role-category.component';
import { StudentCoursesComponent } from './components/student-courses/student-courses.component';
import { TeacherCoursesComponent } from './components/teacher-courses/teacher-courses.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';

const route: Routes = [
  // { path: 'users/:userId', component: UserDetailsComponent },
  // { path: 'search/:keyword', component: UsersComponent },
  // { path: 'role/:roleId', component: UsersComponent },
  // { path: 'role', component: UsersComponent },
  // { path: 'users', component: UsersComponent },
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('../shared/shared.module').then((m) => m.SharedModule),
  // },
  // { path: '**', redirectTo: '/users', pathMatch: 'full' },
  // {
  //   path: '',
  //   children: [
  //     { path: 'users', component: UsersComponent },
  //     { path: 'courses', component: CoursesComponent },
  //     { path: 'teacher_courses', component: TeacherCoursesComponent },
  //     { path: 'student_courses', component: StudentCoursesComponent },
  //     { path: 'marks', component: MarksComponent },
  //     { path: 'role_category', component: RoleCategoryComponent },
  //     { path: '', redirectTo: '/', pathMatch: 'full' },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
