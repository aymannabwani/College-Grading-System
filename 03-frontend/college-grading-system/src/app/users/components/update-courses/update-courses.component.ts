import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { UsersService } from 'src/app/services/users.service';
import { Courses } from '../../model/courses';

@Component({
  selector: 'app-update-courses',
  templateUrl: './update-courses.component.html',
  styleUrls: ['./update-courses.component.css'],
})
export class UpdateCoursesComponent implements OnInit {
  courseId: number;
  course: Courses = new Courses();

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params['courseId'];
    this.courseService.getCourse(this.courseId).subscribe(
      (data) => {
        this.course = data;
      },
      (error) => console.log(error)
    );
  }

  getCourse() {
    this.courseService.createCourse(this.course).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    console.log(this.course);
    this.getCourse();
  }
}
