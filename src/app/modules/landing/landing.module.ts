import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { TimelineItemComponent } from '../../shared/components/timeline-item/timeline-item.component';

@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ComponentsModule
  ],
  exports: [HeaderComponent, TimelineItemComponent]
})
export class LandingModule { }
