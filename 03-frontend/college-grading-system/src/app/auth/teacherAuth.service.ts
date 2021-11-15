import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherAuthService {
  constructor(private router: Router, private usersService: UsersService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.usersService.isTeacherLoggedIn();
  }
}
