import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { MarksComponent } from './components/marks/marks.component';
import { RoleCategoryComponent } from './components/role-category/role-category.component';
import { StudentCoursesComponent } from './components/student-courses/student-courses.component';
import { TeacherCoursesComponent } from './components/teacher-courses/teacher-courses.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
