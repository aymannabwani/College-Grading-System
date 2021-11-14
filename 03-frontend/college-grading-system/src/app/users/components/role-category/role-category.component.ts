import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { RoleCategory } from '../../model/role-category';
import { Users } from '../../model/users';

@Component({
  selector: 'app-role-category',
  templateUrl: './role-category.component.html',
  styleUrls: ['./role-category.component.css'],
})
export class RoleCategoryComponent implements OnInit {
  roleCategories: RoleCategory[];
  allUsers: Users;
  usersService: UsersService;

  constructor(private rolesService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.listRoleCategories();
    this.usersService = this.rolesService;
    this.allUsersList('');
  }
  // not working as expected
  allUsersList(all: string) {
    console.log(`usersList works`);
    // this.router.navigateByUrl(`/search/${all}`);
  }

  listRoleCategories() {
    this.rolesService.getRoleCategories().subscribe((data) => {
      console.log('Role Categories : ' + JSON.stringify(data));
      this.roleCategories = data;
      console.log(data);
    });
  }
}
