import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  profilList: User[] = [];

  constructor(private http: HttpClient) {}
  /**getAllProfils(): User[] {
    return this.profilList;
  }*/

  /**getProfilById(profilId: number): User {
    const profil = this.profilList.find((profil) => profil.id === profilId);
    if (!profil) {
      throw new Error('Profil not found');
    } else {
      return profil;
    }
  }*/

  getProfilByNickname(profilNickname: string): Observable<User> {
    return this.http.get<User>(`${environment.URL}/users/${profilNickname}`);
  }
}
