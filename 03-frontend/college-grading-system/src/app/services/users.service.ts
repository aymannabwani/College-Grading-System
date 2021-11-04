import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../users/model/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) {}

  getUsersList(theRoleId: number): Observable<Users[]> {
    // build URL based on roleCategoryId
    const searchUrl = `${this.baseUrl}/search/findByRoleId?roleId=${theRoleId}`;
    console.log(theRoleId);
    return this.httpClient
      .get<GetResponse>(searchUrl)
      .pipe(map((response) => response._embedded.users));
  }
}
interface GetResponse {
  _embedded: {
    users: Users[];
  };
}
