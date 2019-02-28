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
    selectedEvent: Event;
    newEvent: boolean;
    constructor(private eventService: EventServiceService) {}

    NewEventInput(t: string, d: Date, l: string, uId: number) {
        this.eventService
            .newEvent({
                userId: uId,
                title: t,
                date: d,
                location: l
            } as Event)
            .subscribe((event: Event) => this.EventList.push(event));
    }
    DeleteEvent(id: number): void {
        this.eventService
            .deleteEvent(id)
            .subscribe(r =>
                this.eventService
                    .getEvents()
                    .subscribe(response => (this.EventList = response))
            );
    }
    EditEvent(t: string, d: Date, l: string, uId: number, id: number) {
        this.eventService.editEvent({
            userId: uId,
            title: t,
            date: d,
            location: l
        } as Event, id).subscribe(r =>
            this.eventService
                .getEvents()
                .subscribe(response => (this.EventList = response))
                );
        this.selectedEvent = null;
    }
    isEditClicked(event: Event): void {
        this.selectedEvent = event;
    }
    isNewEventClicked(): void {
        this.newEvent = !this.newEvent;
    }

    ngOnInit() {
        this.eventService
            .getEvents()
            .subscribe(response => (this.EventList = response));
    }
}
