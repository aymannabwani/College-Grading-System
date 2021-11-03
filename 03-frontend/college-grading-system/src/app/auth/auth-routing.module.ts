import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '../users/components/courses/courses.component';
import { MarksComponent } from '../users/components/marks/marks.component';
import { RoleCategoryComponent } from '../users/components/role-category/role-category.component';
import { StudentCoursesComponent } from '../users/components/student-courses/student-courses.component';
import { TeacherCoursesComponent } from '../users/components/teacher-courses/teacher-courses.component';
import { UsersComponent } from '../users/components/users/users.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
