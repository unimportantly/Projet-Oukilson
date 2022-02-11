import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/app/models/Event.model';
import { User } from 'src/app/models/MyProfil.model';
import { EventService } from 'src/app/services/event.service';
import { EventsPage } from '../events.page';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event!: Events;
  buttonText: string = "+";
  constructor(private eventPage: EventsPage, private eventService: EventService) { }

  ngOnInit(): void {
    this.event.startingDate = new Date(this.event.startingDate);
  }

  switchView() {
    if(this.eventPage.buttonPlus) {
        this.eventPage.buttonPlus = false;
        this.buttonText = "-";
        this.eventPage.searchByUuid(this.event.uuid);
        this.eventService.eventToDetail = this.event;
    } 
    else {
      this.eventPage.buttonPlus = true;
      this.buttonText = "+";
    }
  }
}
