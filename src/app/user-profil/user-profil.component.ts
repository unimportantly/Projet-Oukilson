import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from '../models/profil.model';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  profil!: Profil;
  buttonFriendText!: string;
  buttonDeniedText!: string;
  onFriendList!: boolean;
  onDeniedList!: boolean;

  constructor(
    private profilService: ProfilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.onFriendList = false;
    this.onDeniedList = false;
    const profilNickname = this.route.snapshot.params['nickname'];
    this.profil = this.profilService.getProfilByNickname(profilNickname);
    this.buttonFriendText = 'Ajouter à mes amis';
    this.buttonDeniedText = 'Ajouter à mes indésirables';
    if (this.profil.iconUrl === '') {
      this.profil.iconUrl =
        'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
    }
  }

  onAddFriendList() {
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

  onAddDeniedList() {
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

  onContact() {
    this.router.navigateByUrl('send-message');
  }
}
