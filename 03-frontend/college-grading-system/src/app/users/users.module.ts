import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    CourseDetailsComponent
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
