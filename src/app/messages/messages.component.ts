import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    constructor(private messageService: MessageService) {}

    messages;

    ngOnInit() {
        this.messageService
            .getMessages()
            .subscribe(data => (this.messages = data));
    }

    sendMessage(newMessage) {
        this.messageService
            .postMessage({ message: newMessage, username: 'Admin' })
            .subscribe(r =>
                this.messageService
                    .getMessages()
                    .subscribe(data => (this.messages = data))
            );

        document.querySelector('#newMessageInput').value = '';
    }
}
