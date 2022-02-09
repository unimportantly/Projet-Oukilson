import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Events } from 'src/app/models/Event.model';
import { EventsPage } from '../events.page';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  @Input() events!: Events[];
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
    }
  }

}
