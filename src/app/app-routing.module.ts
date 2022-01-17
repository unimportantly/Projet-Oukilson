import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: 'profillist/:nickname', component: UserProfilComponent },
  { path: 'profillist', component: ProfilListComponent },
  { path: '', component: HomeComponent },
  { path: 'create-account', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
