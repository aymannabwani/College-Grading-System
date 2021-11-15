import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Courses } from '../users/model/courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient, private router: Router) {}

  getAllCourses(): Observable<Courses[]> {
    return this.httpClient.get<Courses[]>(`${this.baseUrl}`);
  }

  createCourse(course: Courses): Observable<Courses[]> {
    return this.httpClient.post<Courses[]>(`${this.baseUrl}`, course);
  }

  deleteCourse(courseId: number): Observable<Courses[]> {
    return this.httpClient.delete<Courses[]>(`${this.baseUrl}/${courseId}`);
  }

  getCourse(theCourseId: number): Observable<Courses> {
    // build URL based on courseId
    console.log(theCourseId);
    return this.httpClient.get<Courses>(`${this.baseUrl}/${theCourseId}`);
  }

  getCoursesListPaginate(
    thePage: number,
    thePageSize: number
  ): Observable<GetResponseCourses> {
    // build URL based on courseId and page
    const searchUrl =
      `${this.baseUrl}` + `?page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseCourses>(searchUrl);
  }

  getAllCoursesListPaginate(
    thePage: number,
    thePageSize: number
  ): Observable<GetResponseCourses> {
    // build URL based on courseId and page
    const searchUrl =
      `${this.baseUrl}` + `?page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseCourses>(searchUrl);
  }

  searchCourses(theKeyword: string): Observable<Courses[]> {
    const searchUrl = `${this.baseUrl}/search/findByCourseNameContaining?courseName=${theKeyword}`;
    return this.getCourses(searchUrl);
  }

  searchCourseId(theCourseId: number): Observable<Courses[]> {
    // build URL based on courseId
    const searchUrl = `${this.baseUrl}/search/findByCourseId?courseId=${theCourseId}`;

    return this.getCourses(searchUrl);
  }

  getCourses(searchUrl: string): Observable<Courses[]> {
    return this.httpClient
      .get<GetResponseCourses>(searchUrl)
      .pipe(map((response) => response._embedded.courses));
  }
}

interface GetResponseCourses {
  _embedded: {
    courses: Courses[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
