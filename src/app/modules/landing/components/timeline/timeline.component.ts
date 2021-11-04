import { Component, OnInit } from '@angular/core';
import { ITimelineItem } from 'src/app/shared/models/ITimelineItem';
import { TimelineService } from '../../../../services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  public timelineData: ITimelineItem[] = [];

  constructor(private readonly timelineService: TimelineService) {
    this.timelineData = this.timelineService.getTimelineData();
  }

  ngOnInit(): void {}
}
