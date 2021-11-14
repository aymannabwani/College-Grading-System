import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Courses } from '../../model/courses';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  course: Courses = new Courses();

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {}

  saveCourse() {
    this.courseService.createCourse(this.course).subscribe(
      (data) => {
        console.log(data);
        this.goToCoursesList();
      },
      (error) => console.log(error)
    );
  }

  goToCoursesList() {
    this.router.navigate(['/courses']);
  }

  onSubmit() {
    console.log(this.course);
    this.saveCourse();
  }
}
