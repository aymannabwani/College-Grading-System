import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Courses } from '../../model/courses';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  course: Courses = new Courses();

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleCourseDetails();
    });
  }
  handleCourseDetails() {
    // get the "courseId" param string and convert it to number using the "+" symbol
    const theCourseId: number = +this.route.snapshot.paramMap.get('courseId');
    this.courseService.getCourse(theCourseId).subscribe((data) => {
      this.course = data;
    });
  }
}
