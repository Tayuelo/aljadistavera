import { Injectable } from '@angular/core';
import { DATA } from './mock-timeline';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  public getTimelineData() {
    console.log('Invoked')
    return DATA;
  }
}
