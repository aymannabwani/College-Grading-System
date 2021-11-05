import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule, RouterModule],
  exports: [],
})
export class UsersModule {}
