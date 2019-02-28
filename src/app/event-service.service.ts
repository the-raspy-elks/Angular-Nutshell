import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http: HttpClient) { }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/events');
  }
  newEvent(event: Event) {
    return this.http.post('http://localhost:3000/events', event);
  }
  editEvent(event: Event, id: number): Observable<Event> {
      return this.http.put<Event>(`http://localhost:3000/events/${id}`, event);
  }
  deleteEvent(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:3000/events/${id}`);
  }
}
