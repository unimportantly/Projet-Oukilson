import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/app/models/Event.model';
import { Game } from 'src/app/models/Game.model';
import { User } from 'src/app/models/MyProfil.model';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: Events = {
    uuid: '',
    creator: new User(), 
    game: new Game(),
    title: '',
    description: '',
    startingDate: new Date(),
    endDate: new Date(),
    limitDate: new Date(),
    minPlayer: 0,
    maxPlayer: 0,
    registeredUsers: [],
    location: {address:'', town:'',zipCode:''},
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getDetails(uuid : string): void {
    this.router.navigateByUrl(`/events/${uuid}`);
  }
}
