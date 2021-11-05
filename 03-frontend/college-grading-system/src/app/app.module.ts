import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './services/users.service';
import { SharedModule } from './shared/shared.module';
import { RoleCategoryComponent } from './users/components/role-category/role-category.component';
import { SearchComponent } from './users/components/search/search.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { UsersComponent } from './users/components/users/users.component';

const routes: Routes = [
  { path: 'users/:userId', component: UsersComponent },
  { path: 'search/:keyword', component: UsersComponent },
  { path: 'role/:roleId', component: UsersComponent },
  { path: 'role', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RoleCategoryComponent,
    SearchComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    CommonModule,
    FormsModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
