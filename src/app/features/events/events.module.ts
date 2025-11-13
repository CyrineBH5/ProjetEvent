import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { TopEventComponent } from './top-event/top-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardEventComponent } from './card-event/card-event.component';
import { OrderByLikesPipe } from '../../shared/pipes/order-by-likes.pipe';
import { AddEventComponent } from './add-event/add-event.component';
import { ParticiperComponent } from './participer/participer.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    DetailEventComponent,
    TopEventComponent,
    CardEventComponent,
    OrderByLikesPipe,
    AddEventComponent,
    ParticiperComponent,

  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[

  ]
})
export class EventsModule { }
