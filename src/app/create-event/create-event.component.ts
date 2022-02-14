import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateEventService } from './create-event.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;
  gameButtonContent: string = 'Choisir un jeu';
  townSelected: string = '';
  creatorId!: string;

  constructor(private service: CreateEventService) {
    this.createEventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      game: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      startingDate: new FormControl('', Validators.required),
      endingDate: new FormControl(),
      limitDate: new FormControl('', Validators.required),
      minPlayer: new FormControl('', Validators.required),
      maxPlayer: new FormControl('', Validators.required),
      creator: new FormControl(''),
      isPrivate: new FormControl(false),

      location: new FormGroup({
        town: new FormControl('', Validators.required),
        zipCode: new FormControl('', Validators.required),
        adress: new FormControl(''),
      }),
    });
  }

  ngOnInit(): void {
    const token: any = localStorage.getItem('id_token');
    const tokenDecoded: any = jwt_decode(token);
    this.creatorId = tokenDecoded.sub;
  }
  onFormSubmit() {
    let newEvent = { ...this.createEventForm.value };
    this.service.createEvent(newEvent).subscribe((elem) => {
      console.log(elem);
    });
    console.log(this.createEventForm.value);
  }

  chosenGame(selectedGame: { name: string; uuid: string }) {
    this.gameButtonContent = 'Jeu selectionné: ' + selectedGame.name;
    this.createEventForm.patchValue({ game: { uuid: selectedGame.uuid } });
    this.createEventForm.patchValue({ creator: { nickname: this.creatorId } });
  }
}
