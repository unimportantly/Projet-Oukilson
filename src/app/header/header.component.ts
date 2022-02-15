import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  
  text: string ="SE CONNECTER";
  constructor() {}

  ngOnInit(): void {
  }

  userIsLoggedIn(): boolean {
    let resp: boolean = false;
    if(localStorage.length > 0) {
      this.text = "SE DECONNECTER";
      resp = true;
    }
    return resp;
  }
  logOut(): void {
    localStorage.clear();
    this.text = "SE CONNECTER";
  }
}
