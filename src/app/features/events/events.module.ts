import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { TopEventComponent } from './top-event/top-event.component';
import { FormsModule } from '@angular/forms';
import { CardEventComponent } from './card-event/card-event.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    DetailEventComponent,
    TopEventComponent,
    CardEventComponent

  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
  ]
})
export class EventsModule { }
