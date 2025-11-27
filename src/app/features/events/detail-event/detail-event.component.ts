import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../shared/service/events.service';
import { Eventy } from '../../../model/eventy';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrl: './detail-event.component.css'
})
export class DetailEventComponent {
    id: number;
    event: Eventy | undefined;

//1- injection de dependence ( ActivatedRoute) : Pour recup les param de la route
  constructor(private Act : ActivatedRoute, private eventS : EventsService) {
     this.eventS.getEventById(this.Act.snapshot.params['id']).subscribe(data=>{
        this.event=data;
        console.log(data);
      });
  }

    ngOnInit() {
      //2- recup id from route snapshot
      //3- recuperer les details de l'evenement en utilisant id
      //this.event=this.eventS.events.find(e=>e.id==this.id);


   }
}
