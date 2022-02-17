import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  @Input() userLoggedIn!: User;
  @Input() iconUrl!: string;

  constructor(
    private service: MembersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onChangeIcon() {}

  displayDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  onViewProfil(event: Event, nickname: string) {
    event.stopPropagation();
    this.router.navigateByUrl(`profillist/${nickname}`);
  }
}
