import { Injectable } from '@angular/core';
import { Profil } from '../models/Profil.model';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  profilList: Profil[] = [
  ];

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

  getProfilByNickname(profilNickname: string): Profil {
    const profil = this.profilList.find(
      (profil) => profil.nickname === profilNickname
    );
    if (!profil) {
      throw new Error('User not found');
    } else {
      return profil;
    }
  }
}
