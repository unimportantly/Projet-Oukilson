import { Component, OnInit } from '@angular/core';
import { Events } from '../models/Event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList!: Events[];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventList = this.eventList.getAllEvents();
  }

}
