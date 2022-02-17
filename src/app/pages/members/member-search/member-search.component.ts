import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MembersPage } from '../members.page';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss']
})
export class MemberSearchComponent implements OnInit {

  searchUserByNameForm: FormGroup;
  constructor(private page: MembersPage) {
    this.searchUserByNameForm = new FormGroup ({
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
   }

  ngOnInit(): void {
  }

  getUserByNickname() {
    let nickname: string = this.searchUserByNameForm.controls['name'].value;
    if ( nickname.length > 2)
    this.page.getUserByNickname(nickname);
  }
}
