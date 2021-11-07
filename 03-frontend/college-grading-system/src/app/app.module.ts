import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './users/components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { RoleCategoryComponent } from './users/components/role-category/role-category.component';
import { SearchComponent } from './users/components/search/search.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  { path: 'users/:userId', component: UserDetailsComponent },
  { path: 'search/:keyword', component: UsersComponent },
  { path: 'role/:roleId', component: UsersComponent },
  { path: 'role', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    RoleCategoryComponent,
    SearchComponent,
    UserDetailsComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
