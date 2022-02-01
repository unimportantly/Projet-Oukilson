import { Component, OnInit } from '@angular/core';
import { Events } from '../models/Event.model';
import { EventService } from '../services/event.service';
import {InputTextModule} from 'primeng/inputtext';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events!: Events[];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

   onFormSubmit(searchEventForm: NgForm) {
     if this.eventService.
   }
}
