import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedProjectComponent } from './components/featured-project/featured-project.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeaturedProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeaturedProjectComponent
  ]
})
export class SharedModule { }
