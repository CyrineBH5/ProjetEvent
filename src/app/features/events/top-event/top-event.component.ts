import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-event',
  templateUrl: './top-event.component.html',
  styleUrl: './top-event.component.css'
})
export class TopEventComponent {
@Input() topEvents: any[] = [];
@Input() event: any;

  @Output() onLike = new EventEmitter<any>();

  likeEvent() {
    this.event.nbrLike++;
    this.onLike.emit(this.event);
  }
}
