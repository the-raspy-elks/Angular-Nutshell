import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private http: HttpClient) {}

    allMessages;

    getMessages() {
        return this.http.get('http://localhost:3000/messages').pipe();
    }
}
