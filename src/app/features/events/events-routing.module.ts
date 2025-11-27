import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ParticiperComponent } from './participer/participer.component';

const routes: Routes = [{
  path: '', component: EventsComponent, children: [
    { path: '', component: ListEventComponent },
    { path: ':id', component: DetailEventComponent },
    { path: 'add-event', component: AddEventComponent },
    { path: 'participate/:id/:prix', component: ParticiperComponent },

  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
