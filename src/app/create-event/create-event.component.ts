import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateEventService } from './create-event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;

  constructor(private service: CreateEventService) {
    this.createEventForm = new FormGroup({
      eventTitle: new FormControl('', Validators.required),
      gameName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl(),
      limitDate: new FormControl('', Validators.required),
      minPlayer: new FormControl('', Validators.required),
      maxPlayer: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      adress: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  onFormSubmit() {
    console.log(this.createEventForm.value);
    let newEvent = { ...this.createEventForm.value };

    this.service.createEvent(newEvent).subscribe((elem) => {
      console.log(elem);
    });
  }
}
