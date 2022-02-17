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
  @Input() profil!: User;
  @Input() iconUrl!: string;

  constructor(
    private service: MembersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const token: any = localStorage.getItem('id_token');
    if (token === null) {
      this.router.navigate(['login']);
    }
    const tokenDecoded: any = jwt_decode(token);
    this.service.getUserByNickname(tokenDecoded.sub).subscribe({
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
