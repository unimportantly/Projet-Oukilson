import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { MembersService } from 'src/app/services/members.service';
import { MembersPage } from '../members.page';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  @Input() users!: User[];
  public buttonText = "+";
  constructor(private page: MembersPage, private service : MembersService) { }

  ngOnInit(): void {
  }

  switchView(user: User) {
    if (this.page.buttonPlus) {
      this.page.buttonPlus = false;
      this.buttonText = "-";
      this.service.selectedUser = user;
    }
    else {
      this.page.buttonPlus = true;
      this.buttonText = "+";
    }
  }

}
