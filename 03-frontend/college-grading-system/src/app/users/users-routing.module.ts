import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { MarksComponent } from './components/marks/marks.component';
import { RoleCategoryComponent } from './components/role-category/role-category.component';
import { StudentCoursesComponent } from './components/student-courses/student-courses.component';
import { TeacherCoursesComponent } from './components/teacher-courses/teacher-courses.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';

const route: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
