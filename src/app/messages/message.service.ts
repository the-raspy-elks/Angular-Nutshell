import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private http: HttpClient) {}

    allMessages;

    getMessages() {
        return this.http.get('http://localhost:3000/messages');
    }

    postMessage(message) {
        return this.http.post('http://localhost:3000/messages', message);
    }
}
