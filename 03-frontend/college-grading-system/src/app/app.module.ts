import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './services/users.service';
import { SharedModule } from './shared/shared.module';
import { UsersComponent } from './users/components/users/users.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    UsersModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
