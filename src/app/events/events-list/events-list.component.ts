import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
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
    let input: string = this.searchEventByCityForm.controls['city'].value;

    if (input.length > 2) {
      this.eventService.getEventsByLocation(input).subscribe({
        next: data => { this.eventList = data; console.log(data) },
        error: err => console.log(err)
      })
    }
  }

  searchByDate() {
    let input: string = this.searchEventByDateForm.controls['date'].value;

    if (input !== null) {
      console.log("!!");
      input = input + "T00:00:00"
      this.eventService.getEventsByDate(input).subscribe({
        next: data => {
          this.eventList = data;
          this.eventList.forEach(event => {
            event.startingDate = new Date(event.startingDate);
            event.limitDate = new Date(event.limitDate);
            if (event.endingDate)
              event.endingDate = new Date(event.endingDate);
          })
        },
        error: err => console.log(err)
      })
    }
  }

}
