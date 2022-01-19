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

  constructor(
    private profilService: ProfilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const profilNickname = this.route.snapshot.params['nickname'];
    this.profil = this.profilService.getProfilByNickname(profilNickname);
    this.buttonFriendText = 'Add Friend List';
    this.buttonDeniedText = 'Add Denied List';
    if (this.profil.iconUrl === '') {
      this.profil.iconUrl =
        'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
    }
  }

  onAddFriendList() {
    if (this.buttonFriendText == 'Add Friend List') {
      this.buttonFriendText = 'Remove Friend List';
    } else {
      this.buttonFriendText = 'Add Friend List';
    }
  }

  onAddDeniedList() {
    if (this.buttonDeniedText == 'Add Denied List') {
      this.buttonDeniedText = 'Remove Denied List';
    } else {
      this.buttonDeniedText = 'Add Denied List';
    }
  }

  onContact() {
    this.router.navigateByUrl('send-message');
  }

  onChangeIcon() {
    this.profil.iconUrl = '';
  }
}
