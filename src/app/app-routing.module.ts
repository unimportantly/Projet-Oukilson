import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsListComponent } from './events-list/events-list.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'eventslist', component: EventsListComponent },
  { path: 'eventslist/:uuid', component: EventDetailsComponent},
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'profillist', component: ProfilListComponent },
  { path: 'profillist/:nickname', component: UserProfilComponent },
  { path: 'gameslist', component: GameslistComponent },
  { path: 'send-message', component: SendMessageComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
