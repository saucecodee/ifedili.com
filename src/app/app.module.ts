import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from "swiper/angular";
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ComponentComponent } from './pages/component/component.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { MenuComponent } from './pages/menu/menu.component';

import { NavigationService } from './core/services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ComponentComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    LoaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SwiperModule
  ],
  providers: [
    // NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
