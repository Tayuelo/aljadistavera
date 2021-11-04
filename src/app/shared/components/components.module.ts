import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, TimelineItemComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, TimelineItemComponent]
})
export class ComponentsModule { }
