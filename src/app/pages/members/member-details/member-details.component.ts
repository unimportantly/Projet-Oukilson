import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { MembersService } from 'src/app/services/members.service';
import { MembersPage } from '../members.page';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {

  @Input() userLoggedIn?: User;
  user!: User;
  onFriendList?: boolean;
  onDeniedList?: boolean;

  constructor(private page: MembersPage, private service: MembersService) { }

  ngOnInit(): void {
    this.user = this.service.selectedUser;
    if (this.userLoggedIn) {
      if (this.userLoggedIn.friendList) {
        let onFList: User | undefined = this.userLoggedIn.friendList.find(
          user => user.nickname === this.user.nickname);
        if (onFList) this.onFriendList = true;
      }
      if (this.userLoggedIn.deniedList) {
        let onDList: User | undefined = this.userLoggedIn.deniedList.find(
          user => user.nickname === this.user.nickname);
        if (onDList) this.onDeniedList = true;
      }
    }
  }

  onAddFriendList() {
    this.onFriendList ? this.removeToFriendList() : this.addToFriendList();
  }

  onAddDeniedList() {
    this.onDeniedList
      ? console.log('TODO : Supprerssion de la denied')
      : console.log('TODO : Ajout Denied List');
  }


  addToFriendList() {
    this.page.addToFriendList(this.user.nickname);
    this.onFriendList = true;
    this.onDeniedList = false;
  }

  removeToFriendList() {
    this.page.removeFromFriendList(this.user.nickname);
    this.onFriendList = false;
    this.onDeniedList = false;
  }
}
