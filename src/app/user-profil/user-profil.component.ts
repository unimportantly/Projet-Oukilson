import jwt_decode from 'jwt-decode';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User.model';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  @Input() iconUrl!: string;
  @Input() profil!: User;
  @Input() profilLogged!: User;
  @Input() friendList!: User[];
  @Input() deniedList!: User[];
  buttonFriendText!: string;
  buttonDeniedText!: string;
  onFriendList!: boolean;
  onDeniedList!: boolean;

  constructor(
    private membersService: MembersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const token: any = localStorage.getItem('id_token');
    if (token === null) {
      this.router.navigate(['login']);
    }
    const tokenDecoded: any = jwt_decode(token);
    this.membersService.getUserByNickname(tokenDecoded.sub).subscribe({
      next: (data) => {
        this.profilLogged = data;
        console.log(data);
      },
      error: () => this.router.navigate(['404']),
    });
    const profilNickname = this.route.snapshot.params['nickname'];
    this.getProfilByNickname(profilNickname);
    this.onFriendList = false;
    this.onDeniedList = false;

    let ami: User | undefined = undefined;
    if (this.friendList) {
      ami = this.friendList.find(
        (friend) => friend.nickname === this.profil.nickname
      );
    }

    let denied: User | undefined = undefined;
    if (this.deniedList) {
      denied = this.deniedList.find(
        (friend) => friend.nickname === this.profil.nickname
      );
    }

    this.buttonFriendText = 'Ajouter à mes amis';
    this.buttonDeniedText = 'Ajouter à mes indésirables';
    if (this.iconUrl === undefined) {
      this.iconUrl =
        'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
    }
    if (ami) this.onFriendList = true;
    if (denied) this.onDeniedList = true;
  }

  private getProfilByNickname(nickname: string): void {
    this.membersService.getUserByNickname(nickname).subscribe({
      next: (data) => {
        this.profil = data;
        console.log(data);
      },
      error: () => this.router.navigate(['404']),
      complete: () => console.log('getProfil done'),
    });
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

  addToFriendList() {
    this.membersService.addToFriendlist(this.profil.nickname).subscribe();
    this.onFriendList = true;
    this.onDeniedList = false;
  }

  removeToFriendList() {
    this.membersService.removeFromFriendList(this.profil.nickname).subscribe();
    this.onFriendList = false;
    this.onDeniedList = false;
  }

  onContact() {
    this.router.navigateByUrl('send-message');
  }

  displayDate(date: string): string {
    return new Date(date).toLocaleString();
  }
}
