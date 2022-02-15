import { Game } from './../models/Game.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OverlayGamesSearchService } from './overlay-games-search.service';

@Component({
  selector: 'app-overlay-games-search',
  templateUrl: './overlay-games-search.component.html',
  styleUrls: ['./overlay-games-search.component.scss'],
})
export class OverlayGamesSearchComponent implements OnInit {
  gamesList: Game[] = [];
  selectedGame!: { name: string; uuid: string };
  searchGameForm: FormGroup;
  inputContent: string = 'NOM DU JEU';

  @Output() sendGame: EventEmitter<{ name: string; uuid: string }> =
    new EventEmitter();

  constructor(private overlayService: OverlayGamesSearchService) {
    this.gamesList = [];
    this.searchGameForm = new FormGroup({
      gameName: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    this.getGamesByName(this.searchGameForm.controls['gameName'].value);
  }

  selectGame(selectedGame: { name: string; uuid: string }) {
    this.selectedGame = selectedGame;
    this.inputContent = this.selectedGame.name;
  }

  addGame() {
    if (this.selectedGame !== undefined) {
      this.sendGame.emit(this.selectedGame);
    }
  }

  private getGamesByName(name: string) {
    this.overlayService.getGamesByName(name).subscribe({
      next: (data) => [(this.gamesList = data), console.log(this.gamesList)],
      error: (err) => console.error(err),
      complete: () => console.log('games getted'),
    });
  }
}
