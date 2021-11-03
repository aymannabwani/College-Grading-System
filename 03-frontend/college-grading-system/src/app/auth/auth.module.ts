import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
  exports: [LoginComponent, ForgotPasswordComponent, PageNotFoundComponent],
})
export class AuthModule {}
