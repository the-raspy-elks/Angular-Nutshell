import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventServiceService } from './event-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EventlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EventServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
