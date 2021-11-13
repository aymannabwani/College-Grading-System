import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Courses } from '../../model/courses';
import { TeacherCourses } from '../../model/teacher-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Courses[] = [];
  teacherCourses: TeacherCourses[] = [];

  constructor() {}

  ngOnInit(): void {}
}
