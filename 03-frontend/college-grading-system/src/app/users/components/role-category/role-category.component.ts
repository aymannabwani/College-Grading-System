import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { RoleCategory } from '../../model/role-category';

@Component({
  selector: 'app-role-category',
  templateUrl: './role-category.component.html',
  styleUrls: ['./role-category.component.css'],
})
export class RoleCategoryComponent implements OnInit {
  roleCategories: RoleCategory[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.listRoleCategories();
  }
  listRoleCategories() {
    this.usersService.getRoleCategories().subscribe((data) => {
      console.log('Role Categories : ' + JSON.stringify(data));
      this.roleCategories = data;
      console.log(data);
    });
  }
}
