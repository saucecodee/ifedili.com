import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedProjectComponent } from './components/featured-project/featured-project.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SkillsComponent } from './components/skills/skills.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeaturedProjectComponent,
    AchievementsComponent,
    ExperiencesComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeaturedProjectComponent,
    AchievementsComponent,
    ExperiencesComponent,
    SkillsComponent
  ]
})
export class SharedModule { }
