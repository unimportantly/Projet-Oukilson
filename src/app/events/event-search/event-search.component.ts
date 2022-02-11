import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventsPage } from '../events.page';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss']
})
export class EventSearchComponent implements OnInit {

  searchEventByDateForm: FormGroup;
  searchEventByCityForm: FormGroup;

  constructor(private eventPage: EventsPage) {
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
      this.eventPage.searchByCity(input);
    }
  }

  searchByDate() {
    let input: string = this.searchEventByDateForm.controls['date'].value;
    if (input !== null) {
      input = input + "T00:00:00";
      this.eventPage.searchByDate(input);
      console.log(input);
    }
  }
}
