import { Component, Input } from '@angular/core';
import { ITimelineItem } from '../../models/ITimelineItem';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {

  public skillsWithColors: { [key: string]: string } = {
    'kotlin': 'green',
    'java': 'var(--indianred)',
    'react': 'var(--lightskyblue)',
    'ngrx': 'var(--darkorchid)',
    'redux': 'var(--slateblue)',
    'angular': 'var(--crimson)',
    'ionic': 'var(--dodgerblue)'
  }

  @Input() data: ITimelineItem | null = null;
}

export enum Skills {
  'kotlin' = 'green',
  'java' = 'var(--indianred)'
}