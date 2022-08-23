import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BioPageComponent } from './pages/bio-page/bio-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BioPageComponent,
    SkillsPageComponent,
    ProjectsPageComponent,
    SidebarComponent,
    CardComponent,
    TagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
