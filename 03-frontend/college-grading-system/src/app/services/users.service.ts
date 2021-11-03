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

  getUsersList(): Observable<Users[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.users));
  }
}
interface GetResponse {
  _embedded: {
    users: Users[];
  };
}
