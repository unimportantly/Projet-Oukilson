import { Component, Input, OnInit } from '@angular/core';
import { Events } from 'src/app/models/Event.model';
import { EventService } from 'src/app/services/event.service';
import { EventsPage } from '../events.page';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  @Input() events!: Events[];
  public buttonText = "+";

  constructor(private eventPage: EventsPage, private eventService: EventService) {
  }

  ngOnInit(): void {
  }

  switchView(event: Events) {
    if(this.eventPage.buttonPlus) {
        this.eventPage.buttonPlus = false;
        this.buttonText = "-";
        this.eventService.eventToDetail = event;
    } 
    else {
      this.eventPage.buttonPlus = true;
      this.buttonText = "+";
    }
  }
}
