import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  @Input() profil!: User;
  @Input() friendList!: User[];
  @Input() deniedList!: User[];
  buttonFriendText!: string;
  buttonDeniedText!: string;
  onFriendList!: boolean;
  onDeniedList!: boolean;
  event!: Event;

  constructor(private memberService: MembersService, private router: Router) {}

  ngOnInit() {
    this.onFriendList = false;
    this.onDeniedList = false;

    let ami: User | undefined = this.friendList.find(
      (friend) => friend.nickname === this.profil.nickname
    );

    let denied: User | undefined = undefined;
    if (this.deniedList) {
      denied = this.deniedList.find(
        (friend) => friend.nickname === this.profil.nickname
      );
    }

    this.buttonFriendText = 'Ajouter à mes amis';
    this.buttonDeniedText = 'Ajouter à mes indésirables';
    if (this.profil.iconUrl === undefined) {
      this.profil.iconUrl =
        'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
    }

    if (ami) this.onFriendList = true;
    if (denied) this.onDeniedList = true;
  }

  onAddFriendList(event: Event) {
    event.stopPropagation();
    this.onFriendList ? this.removeToFriendList() : this.addToFriendList();
  }

  onAddDeniedList(event: Event) {
    event.stopPropagation();
    this.onDeniedList
      ? console.log('TODO : Supprerssion de la denied')
      : console.log('TODO : Ajout Denied List');
  }

  onViewProfil(event: Event) {
    event.stopPropagation();
    this.router.navigateByUrl(`profillist/${this.profil.nickname}`);
  }

  addToFriendList() {
    this.memberService.addToFriendlist(this.profil.nickname).subscribe();
    this.onFriendList = true;
    this.onDeniedList = false;
  }

  removeToFriendList() {
    this.memberService.removeFromFriendList(this.profil.nickname).subscribe();
    this.onFriendList = false;
    this.onDeniedList = false;
  }
}
