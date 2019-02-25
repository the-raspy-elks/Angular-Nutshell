import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';

@NgModule({
    declarations: [AppComponent, MessagesComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
