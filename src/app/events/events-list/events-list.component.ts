import { Component, Input, OnInit } from '@angular/core';
import { Events } from 'src/app/models/Event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  @Input() events!: Events[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
