import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game.model';
import { GamesPage } from '../games.page';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  @Input() games!: Game[];
  
  constructor() { }

  ngOnInit(): void {
  }


}
