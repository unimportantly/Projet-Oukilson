import { UserProfilService } from './user-profil.service';
import { Component, Input, OnInit } from '@angular/core';
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
    private userProfilService: UserProfilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const profilNickname = this.route.snapshot.params['nickname'];
    /**this.profil = this.profilService.getProfilByNickname(profilNickname);*/
    this.getProfilByNickname(profilNickname);
    this.onFriendList = false;
    this.onDeniedList = false;
    this.buttonFriendText = 'Ajouter à mes amis';
    this.buttonDeniedText = 'Ajouter à mes indésirables';
    if (this.profil.iconUrl === '') {
      this.profil.iconUrl =
        'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
    }
  }

  private getProfilByNickname(nickname: string): void {
    this.userProfilService.getProfilByNickname(nickname).subscribe({
      next: (data) => {
        this.profil = data;
        console.log(data);
      },
      error: (err) => this.router.navigate(['404']),
      complete: () => console.log('getProfil done'),
    });
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
