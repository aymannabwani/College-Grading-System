import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/components/login/login.component';
import { PageNotFoundComponent } from './auth/components/page-not-found/page-not-found.component';
import { AboutComponent } from './shared/components/about/about.component';
import { FaqsComponent } from './shared/components/faqs/faqs.component';
import { UsersComponent } from './users/components/users/users.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'faqs', component: FaqsComponent },
  // { path: 'home', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./users/users.module').then((m) => m.UsersModule),
  // },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
