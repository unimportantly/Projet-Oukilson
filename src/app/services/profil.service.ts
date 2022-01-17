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
      counters: 50,
      city: 'Lille',
      online: new Date(),
    },
    {
      id: 2,
      nickname: 'lbmicka',
      iconUrl: '',
      counters: 150,
      city: 'Oloron Sainte-Marie',
      online: new Date(),
    },
    {
      id: 3,
      nickname: 'uninportantly',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/f/f8/Question_mark_alternate.svg',
      counters: 0,
      online: new Date(),
    },
    {
      id: 4,
      nickname: 'ddidier',
      iconUrl: 'https://pic.clubic.com/v1/images/1498568/raw',
      counters: 250,
      online: new Date(),
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

  addProfilCountById(profilId: number, profilType: 'count' | 'uncount'): void {
    const profil = this.getProfilById(profilId);
    profilType === 'count' ? profil.counters++ : profil.counters--;
  }
}
