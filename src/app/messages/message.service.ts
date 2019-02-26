import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private http: HttpClient) {}

    getMessages(): Observable<Message[]> {
        return this.http.get<Message[]>('http://localhost:3000/messages');
    }

    postMessage(message: Message): Observable<object> {
        return this.http.post<Message>('http://localhost:3000/messages', message);
    }
}
