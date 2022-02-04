import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Events } from 'src/app/models/Event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList!: Events[];
  searchEventByDateForm: FormGroup;
  searchEventByCityForm: FormGroup;

  constructor(private eventService: EventService) {
    this.searchEventByCityForm = new FormGroup({
      city: new FormControl()
    });
    this.searchEventByDateForm = new FormGroup({
      date: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  searchByCity() {
    return this.eventService.getEventsByLocation(this.searchEventByCityForm.controls['city'].value).subscribe({
      next: data =>{this.eventList = data; console.log(data)},
      error: err => console.log(err)
    })
  }

  searchByDate() {
    return this.eventService.getEventsByDate(this.searchEventByDateForm.controls['date'].value).subscribe({
      next: data => {this.eventList = data; console.log(data)}
      ,
      error: err => console.log(err)
    })
  }
}
