import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Game } from 'src/app/models/Game.model';
import { GamesPage } from '../games.page';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss']
})
export class GameSearchComponent implements OnInit {

  @Input() game!: Game;
  searchGameByNameForm: FormGroup;
  constructor(private gamePage: GamesPage) {
    this.searchGameByNameForm = new FormGroup({
      name: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  searchByName() {
    this.gamePage.searchGameByName(this.searchGameByNameForm.controls['name'].value);
  }
}
