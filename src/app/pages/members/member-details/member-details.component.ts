import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {

  @Input() userLoggedIn?: User;
  constructor() { }

  ngOnInit(): void {
  }

}
