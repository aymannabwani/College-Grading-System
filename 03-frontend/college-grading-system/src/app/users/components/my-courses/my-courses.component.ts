import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Courses } from '../../model/courses';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
})
export class MyCoursesComponent implements OnInit {
  courses: Courses[] = [];

  // declare Pagination properties
  thePageNumber: number = 1;
  thePageSize: number = 4;
  theTotalElements: number = 0;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.coursesList();
    });
  }

  coursesList() {
    this.courseService
      .getAllCoursesListPaginate(this.thePageNumber - 1, this.thePageSize)
      .subscribe(this.processResult());
  }

  private processResult() {
    return (data: any) => {
      this.courses = data._embedded.courses;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }
}
