import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Events } from '../models/Event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss']
})
export class EventsPage implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription;
  events: Events[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchByCity(input: string) {
    this.subscription.add(this.eventService.getEventsByLocation(input).subscribe({
      next: data => { this.events = data; console.log(data) },
      error: err => console.log(err)
    })
    )
  }

  searchByDate(input: string) {
    this.subscription.add(this.eventService.getEventsByDate(input).subscribe({
      next: data => {
        this.events = data;
        this.events.forEach(event => {
          event.startingDate = new Date(event.startingDate);
          event.limitDate = new Date(event.limitDate);
          if (event.endingDate)
            event.endingDate = new Date(event.endingDate);
        })
      },
      error: err => console.log(err)
    })
    )
  }
}
