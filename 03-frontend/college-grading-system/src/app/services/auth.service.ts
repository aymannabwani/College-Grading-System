import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
    private usersService: UsersService) { }

  teacherAccess(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.usersService.isTeacherLoggedIn();
  }

  studentAccess(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.usersService.isStudentLoggedIn();
  }
}