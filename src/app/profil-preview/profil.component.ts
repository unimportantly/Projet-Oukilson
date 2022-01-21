import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profil } from '../models/profil.model';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  @Input() profil!: Profil;
  buttonFriendText!: string;
  buttonDeniedText!: string;
  onFriendList!: boolean;
  onDeniedList!: boolean;
  event!: Event;

  constructor(private profilService: ProfilService, private router: Router) {}

  ngOnInit() {
    this.onFriendList = false;
    this.onDeniedList = false;
    this.buttonFriendText = 'Ajouter à mes amis';
    this.buttonDeniedText = 'Ajouter à mes indésirables';
    if (this.profil.iconUrl === '') {
      this.profil.iconUrl =
        'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
    }
  }

  onAddFriendList(event: Event) {
    event.stopPropagation();
    /**ajout a la liste quand on est sur aucune liste */
    if (
      this.buttonFriendText == 'Ajouter à mes amis' &&
      this.buttonDeniedText == 'Ajouter à mes indésirables'
    ) {
      this.buttonFriendText = 'Retirer de mes amis';
      /**retrait de la liste d'amis*/
    } else if (
      this.buttonFriendText == 'Retirer de mes amis' &&
      this.buttonDeniedText == 'Ajouter à mes indésirables'
    ) {
      this.buttonFriendText = 'Ajouter à mes amis';
      this.onFriendList = false;
      /**ajout a la liste d'amis quand on est sur la liste d'indésirables */
    } else {
      this.buttonFriendText = 'Ajouter à mes amis';
      this.onDeniedList = true;
    }
  }

  onAddDeniedList(event: Event) {
    event.stopPropagation();
    /**ajout a la liste d'indésirables quand on est sur aucune liste */
    if (
      this.buttonDeniedText == 'Ajouter à mes indésirables' &&
      this.buttonFriendText == 'Ajouter à mes amis'
    ) {
      this.buttonDeniedText = 'Retirer de mes indésirables';
      /**retirer de la liste d'indésirable */
    } else if (
      this.buttonDeniedText == 'Retirer de mes indésirables' &&
      this.buttonFriendText == 'Ajouter à mes amis'
    ) {
      this.buttonDeniedText = 'Ajouter à mes indésirables';
      this.onDeniedList = false;
      /**ajout a la liste d'indesirables quand on est sur la liste d'amis */
    } else {
      this.buttonDeniedText = 'Ajouter à mes indésirables';
      this.onFriendList = true;
    }
  }

  onViewProfil(event: Event) {
    event.stopPropagation();
    this.router.navigateByUrl(`profillist/${this.profil.nickname}`);
  }
}
