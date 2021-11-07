import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    FaqsComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, AboutComponent, FaqsComponent],
})
export class SharedModule {}
