import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profil } from '../models/Profil.model';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  profilList: Profil[] = [
  ];

  constructor(private http: HttpClient) {
    
  }
  getAllProfils(): Profil[] {
    return this.profilList;
  }

  getProfilById(profilId: number): Profil {
    const profil = this.profilList.find((profil) => profil.id === profilId);
    if (!profil) {
      throw new Error('Profil not found');
    } else {
      return profil;
    }
  }

  getProfilByNickname(profilNickname: string): Observable<Profil> {
    return this.http.get<Profil>(`${environment.URL}/users/${profilNickname}`)
  }
}
