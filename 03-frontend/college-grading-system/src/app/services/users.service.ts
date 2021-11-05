import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../users/model/users';
import { RoleCategory } from '../users/model/role-category';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'http://localhost:8080/api/users';
  private roleUrl = 'http://localhost:8080/api/role_category';

  constructor(private httpClient: HttpClient) {}

  getUsersList(theRoleId: number): Observable<Users[]> {
    // build URL based on roleCategoryId
    const searchUrl = `${this.baseUrl}/search/findByRoleId?roleId=${theRoleId}`;
    console.log(theRoleId);
    return this.getUsers(searchUrl);
  }

  searchUsers(theKeyword: string): Observable<Users[]> {
    // build URL based on keyword
    const searchUrl = `${this.baseUrl}/search/findByFirstNameContaining?firstName=${theKeyword}`;

    return this.getUsers(searchUrl);
  }

  private getUsers(searchUrl: string): Observable<Users[]> {
    return this.httpClient
      .get<GetResponseUsers>(searchUrl)
      .pipe(map((response) => response._embedded.users));
  }

  getRoleCategories(): Observable<RoleCategory[]> {
    // build URL based on roleCategory

    return this.httpClient
      .get<GetResponseRoleCategory>(this.roleUrl)
      .pipe(map((response) => response._embedded.roleCategory));
  }
}
interface GetResponseUsers {
  _embedded: {
    users: Users[];
  };
}

interface GetResponseRoleCategory {
  _embedded: {
    roleCategory: RoleCategory[];
  };
}
