import { MyProfilEvents } from 'src/app/models/Event.model';
import { MyProfilePagePage } from './../my-profile-page/my-profile-page.page';
import { Router } from '@angular/router';
import { MyProfileService } from './my-profile.service';
import jwt_decode from 'jwt-decode';
import { UserLoggedIn } from '../models/User.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  @Input() profil!: UserLoggedIn;
  @Input() iconUrl!: string;

  constructor(
    private service: MyProfileService,
    private router: Router,
    private myprofilPage: MyProfilePagePage
  ) {}

  ngOnInit(): void {
    const token: any = localStorage.getItem('id_token');
    if (token === null) {
      this.router.navigate(['login']);
    }
    const tokenDecoded: any = jwt_decode(token);
    this.service.getProfil(tokenDecoded.sub).subscribe({
      next: (data) => {
        this.profil = data;
        console.log(data);
      },
      error: (err) => this.router.navigate(['404']),
    });
    this.iconUrl =
      'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
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
