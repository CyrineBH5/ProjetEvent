import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-event',
  templateUrl: './top-event.component.html',
  styleUrl: './top-event.component.css'
})
export class TopEventComponent {
@Input() topEvents: any[] = [];
}
