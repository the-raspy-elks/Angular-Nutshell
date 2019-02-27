import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  EventList: Event[];

  constructor(private eventService: EventServiceService) { }

  NewEventInput(t: string, d: string, l: string, uId: number) {
    this.eventService.newEvent(
      {
        userId: uId,
        title: t,
        date: d,
        location: l
      } as Event
    ).subscribe((event: Event) => this.EventList.push(event));
  }

  ngOnInit() {
    this.eventService.getEvents()
    .subscribe(response => this.EventList = response);
  }

}
