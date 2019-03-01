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
    editMessageId = 0;

    ngOnInit() {
        this.messageService
            .getMessages()
            .subscribe(data => (this.messages = data));
    }

    toggleEdit(messageId) {
        this.editMessageId = messageId;
    }

    sendMessage(newMessage) {
        const newId: number = Math.floor(Math.random() * 1000000);

        this.messageService
            .postMessage({ message: newMessage, username: 'Admin', id: newId })
            .subscribe((response: Message) => this.messages.push(response));

        (document.querySelector('#newMessageInput') as HTMLInputElement).value =
            '';
    }

    deleteMessage(messageId: number) {
        this.messageService
            .deleteMessage(messageId)
            .subscribe(() =>
                this.messageService
                    .getMessages()
                    .subscribe(data => (this.messages = data))
            );
    }

    editMessage(editedMessage: Message, messageId: number) {
        this.messageService
            .editMessage(editedMessage, messageId)
            .subscribe(() => {
                this.editMessageId = 0;
                this.messageService
                    .getMessages()
                    .subscribe(data => (this.messages = data));
            });
    }
}
