import { Injectable } from '@angular/core';
import { Profil } from '../models/profil.model';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  profilList: Profil[] = [
    {
      id: 1,
      nickname: 'ropi59',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/4/4a/Circle-icons-flame.svg',
      email: 'ropi@mail.com',
    },
    {
      id: 2,
      nickname: 'lbmicka',
      iconUrl: '',
      email: 'lbmicka@mail.com',
    },
    {
      id: 3,
      nickname: 'uninportantly',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/f/f8/Question_mark_alternate.svg',
      email: 'uninportantly@mail.com',
    },
    {
      id: 4,
      nickname: 'ddidier',
      iconUrl: 'https://pic.clubic.com/v1/images/1498568/raw',
      email: 'ddidier@mail.com',
    },
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
