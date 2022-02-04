import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/app/models/Event.model';
import { Game } from 'src/app/models/Game.model';
import { User } from 'src/app/models/MyProfil.model';
import { EventsListComponent } from '../events-list/events-list.component';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Events =  {
    uuid: '',
    creator: new User(), 
    game: new Game(),
    title: '',
    description: '',
    startingDate: new Date(),
    endingDate: new Date(),
    limitDate: new Date(),
    minPlayer: 0,
    maxPlayer: 0,
    registeredUsers: [],
    location: {address:'', town:'',zipCode:''},
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.event.startingDate = new Date(this.event.startingDate);
  }

  getDetails(): void {
    this.router.navigateByUrl(`/events/${this.event.uuid}`);
  }
}
