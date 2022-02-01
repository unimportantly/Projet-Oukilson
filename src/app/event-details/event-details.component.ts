import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../models/Event.model';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  ev: Events = new Events;
  @Input() uuid!: string;
  @Input() userId!: number;
  @Input() gameId!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() startDate!: Date;
  @Input() endDate!: Date;
  @Input() limitDate!: Date;
  @Input() minPlayer!: number;
  @Input() maxPlayer!: number;
  @Input() location!: string;

  constructor() {}

  ngOnInit(): void {
  }

}
