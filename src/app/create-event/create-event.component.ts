import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateEventService } from './create-event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  constructor(private service: CreateEventService) {}

  ngOnInit(): void {}
  onFormSubmit(createEventForm: NgForm) {
    return this.service
      .sendNewEvent(createEventForm.value)
      .subscribe((elem) => {
        console.log(elem);
      });
  }
}
