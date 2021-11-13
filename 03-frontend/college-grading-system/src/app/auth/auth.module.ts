import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [ForgotPasswordComponent, PageNotFoundComponent],
  imports: [CommonModule, AuthRoutingModule],
  exports: [ForgotPasswordComponent, PageNotFoundComponent],
})
export class AuthModule {}
