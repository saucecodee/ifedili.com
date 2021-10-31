import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedProjectComponent } from './components/featured-project/featured-project.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeaturedProjectComponent,
    AchievementsComponent,
    ExperiencesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeaturedProjectComponent,
    AchievementsComponent,
    ExperiencesComponent
  ]
})
export class SharedModule { }
