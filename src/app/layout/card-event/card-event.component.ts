import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent implements OnInit {

   ngOnInit(): void {
  }
  @Input() event: any;
  @Output() liked = new EventEmitter<any>();

  likeEvent() {
    this.event.nbrLike++;
    this.liked.emit(this.event);
  }
}
