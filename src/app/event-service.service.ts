import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
    providedIn: 'root'
})
export class EventServiceService {
    private eventUrl = 'http://localhost:3000/events';
    constructor(private http: HttpClient) {}
    getEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(
            `${this.eventUrl}?_sort=date&_order=desc`
        );
    }
    newEvent(event: Event) {
        return this.http.post(`${this.eventUrl}`, event);
    }
    editEvent(event: Event, id: number): Observable<Event> {
        return this.http.put<Event>(`${this.eventUrl}/${id}`, event);
    }
    deleteEvent(id: number): Observable<{}> {
        return this.http.delete(`${this.eventUrl}/${id}`);
    }
}
