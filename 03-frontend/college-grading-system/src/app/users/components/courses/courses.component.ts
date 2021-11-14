import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Courses } from '../../model/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Courses[] = [];
  currentCourseId: number = 1;
  previousCourseId: number = 1;
  searchMode: boolean = false;

  // declare Pagination properties
  thePageNumber: number = 1;
  thePageSize: number = 4;
  theTotalElements: number = 0;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCourses();
    this.route.paramMap.subscribe(() => {
      this.coursesList();
    });
  }

  private getCourses() {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  updateCourse(courseId: number) {
    this.router.navigate(['update-course', courseId]);
  }

  deleteCourse(courseId: number) {
    this.courseService.deleteCourse(courseId).subscribe((data) => {
      console.log('delete course works');
      this.getCourses();
    });
  }

  coursesList() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    console.log('searchMode: ' + this.searchMode);

    if (this.searchMode) {
      this.handleSearchCourses();
    } else {
      this.handleCourses();
    }
  }

  handleSearchCourses() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    const theCourseId: number = +theKeyword;

    console.log('users component works');
    console.log(theKeyword + '/' + theCourseId);

    // isNaN (is not a number)
    if (isNaN(theCourseId) || theKeyword == '') {
      // search  among Courses for the Course using the keyword
      console.log(' if works');
      this.courseService.searchCourses(theKeyword).subscribe((data) => {
        console.log(' inside works' + JSON.stringify(data));
        this.courses = data;
      });
    } else {
      // search  among Users for the User using the userId
      console.log(' else works');
      this.courseService.searchCourseId(theCourseId).subscribe((data) => {
        this.courses = data;
      });
    }
  }

  handleCourses() {
    // check if courseId available
    const hasCourseId: boolean = this.route.snapshot.paramMap.has('courseId');

    if (hasCourseId) {
      // get roleCategoryId and convert to number using + symbol
      this.currentCourseId = +this.route.snapshot.paramMap.get('courseId');
      console.log('hasCourseID' + this.currentCourseId);
    }
    // if no courseId available then set to courseId 1
    else {
      this.currentCourseId = 1;
    }

    //
    // check if we have different Role than previous
    // Angular will reuse a component if it's recently viewed
    //

    // check if we have different Role than previous
    // then set thePageNumber back to 1
    if (this.previousCourseId != this.currentCourseId) {
      this.thePageNumber = 1;
    }
    this.previousCourseId = this.currentCourseId;
    console.log(
      `currentRoleId=${this.currentCourseId}, thePageNumber=${this.thePageNumber}`
    );

    // get the users for the given roleCategoryId
    if (this.currentCourseId == 0) {
      this.courseService
        .getAllCoursesListPaginate(this.thePageNumber - 1, this.thePageSize)
        .subscribe(this.processResult());
    } else {
      this.courseService
        .getCoursesListPaginate(
          this.thePageNumber - 1,
          this.thePageSize,
          this.currentCourseId
        )
        .subscribe(this.processResult());
    }
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
