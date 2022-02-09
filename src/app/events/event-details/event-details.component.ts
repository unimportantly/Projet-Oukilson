import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Events } from 'src/app/models/Event.model';
import { Game } from 'src/app/models/Game.model';
import { User } from 'src/app/models/MyProfil.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  isParticipating: boolean = false;
  subscription: Subscription = new Subscription;
  public event: Events = {
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
  }

  remainingSlots: number = 0;
  constructor(private route: ActivatedRoute, private eventService: EventService, public router: Router) { }

  ngOnInit(): void {
    let eventUuid: string | null = this.route.snapshot.paramMap.get('uuid');
    
    if (eventUuid !== null) {
      this.subscription = this.eventService.getEventByUuid(eventUuid).subscribe({        
        next: data => {this.event = data;
          this.remainingSlots = this.event.maxPlayer - this.event.registeredUsers.length;
          this.event.startingDate = new Date(this.event.startingDate);
          this.event.limitDate = new Date(this.event.limitDate);
          if (this.event.endingDate)
            this.event.endingDate = new Date(this.event.endingDate);
        }
        ,
        error: err => this.router.navigateByUrl("/404")
      })      
    }
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  participate() {
    
  }

  doNotParticipate() {

  }
}
