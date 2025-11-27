import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eventy } from '../../model/eventy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  constructor(private httpClient: HttpClient) { }
  getAllEvents(): Observable<Eventy[]> {
    return this.httpClient.get<Eventy[]>("http://localhost:3000/events");
  }
  getEventById(id: number): Observable<Eventy> {
    return this.httpClient.get<Eventy>("http://localhost:3000/events/" + id)
  }
  addEvent(eventy: Eventy): Observable<Eventy> {
    return this.httpClient.post<Eventy>("http://localhost:3000/events/", eventy);
  }
  updateEvent(eventy: Eventy): Observable<Eventy> {
    return this.httpClient.put<Eventy>("http://localhost:3000/events/" + eventy.id, eventy);
  }
  deleteEvent(id: number): Observable<void> {
    return this.httpClient.delete<void>("http://localhost:3000/events/" + id);
  }
}
