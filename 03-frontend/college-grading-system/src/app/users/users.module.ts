import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UpdateTeacherCoursesComponent } from './components/update-teacher-courses/update-teacher-courses.component';
import { UpdateStudentCoursesComponent } from './components/update-student-courses/update-student-courses.component';
import { UpdateCoursesComponent } from './components/update-courses/update-courses.component';
import { UpdateMarksComponent } from './components/update-marks/update-marks.component';

@NgModule({
  declarations: [
    UpdateTeacherCoursesComponent,
    UpdateStudentCoursesComponent,
    UpdateCoursesComponent,
    UpdateMarksComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
  ],
  exports: [],
})
export class UsersModule {}
