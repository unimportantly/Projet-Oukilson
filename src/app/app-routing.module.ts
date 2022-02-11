import { HomeComponent } from './home/home.component';
import { Page404Page } from './pages/page404/page404.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsListComponent } from './events-list/events-list.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import { LoginComponent } from './Login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'eventslist', component: EventsListComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'profillist', component: ProfilListComponent },
  { path: 'profillist/:nickname', component: UserProfilComponent },
  { path: 'gameslist', component: GameslistComponent },
  { path: 'send-message', component: SendMessageComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: '404', component: Page404Page },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
