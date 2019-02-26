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

  ngOnInit() {
    this.eventService.getEvents()
    .subscribe(response => this.EventList = response);
  }

}
