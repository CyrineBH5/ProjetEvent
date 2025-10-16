import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../model/eventy';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
  searchTerm: string = '';
  events: Eventy[] = [];
  showBest: boolean = false;
  likedEvents: Eventy[] = [];
  topEvents: Eventy[] = [];

  constructor(private eventS: EventsService) { }

  ngOnInit(): void {
    this.events = this.eventS.events;
    this.updateTopEvents();
  }

  likeEvent(event: Eventy): void {
    event.nbrLike++;

    const exists = this.likedEvents.find(e => e.id === event.id);
    if (!exists) {
      this.likedEvents.push(event);
    }

    this.updateTopEvents();
  }

  // Filtrer les événements selon le terme de recherche
  getFilteredEvents(): Eventy[] {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return this.events;
    }

    const searchLower = this.searchTerm.toLowerCase();
    return this.events.filter(e =>
      e.title.toLowerCase().includes(searchLower) ||
      e.location.toLowerCase().includes(searchLower)
    );
  }

  clickTopEvent(): void {
    this.showBest = !this.showBest;
  }

  // Mettre à jour le top 3 des événements les plus likés
  private updateTopEvents(): void {
    this.topEvents = this.events
      .filter(e => e.nbrLike > 0)
      .sort((a, b) => b.nbrLike - a.nbrLike)
      .slice(0, 3);
  }
}
