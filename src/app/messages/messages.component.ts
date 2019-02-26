import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    constructor(private messageService: MessageService) {}

    messages: Message[];

    ngOnInit() {
        this.messageService
            .getMessages()
            .subscribe(data => (this.messages = data));
    }

    sendMessage(newMessage) {
        this.messageService
            .postMessage({ message: newMessage, username: 'Admin' })
            .subscribe((response: Message) => this.messages.push(response));

        document.querySelector('#newMessageInput').value = '';
    }
}
