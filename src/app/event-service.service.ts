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
}
