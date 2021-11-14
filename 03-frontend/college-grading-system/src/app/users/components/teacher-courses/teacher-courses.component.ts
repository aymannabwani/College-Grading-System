import { Component, OnInit } from '@angular/core';
import { TeacherCourses } from '../../model/teacher-courses';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.css'],
})
export class TeacherCoursesComponent implements OnInit {
  teacherCourses: TeacherCourses[] = [];

  constructor() {}

  ngOnInit(): void {}
}
