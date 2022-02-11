import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/Event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  isParticipating: boolean = false;
  public event!: Events;

  remainingSlots: number = 0;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.event = this.eventService.eventToDetail;
    this.remainingSlots = this.event.maxPlayer - this.event.registeredUsers.length;
  }

  participate() {
    
  }

  doNotParticipate() {

  }
}
