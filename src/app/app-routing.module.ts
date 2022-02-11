import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsPage } from './events/events.page';
import { GamesPage } from './games/games.page';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'events', component: EventsPage },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'profillist', component: ProfilListComponent },
  { path: 'profillist/:nickname', component: UserProfilComponent },
  { path: 'games', component: GamesPage },
  { path: 'send-message', component: SendMessageComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
