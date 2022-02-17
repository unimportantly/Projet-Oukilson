import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsPage } from './events/events.page';
import { GamesPage } from './games/games.page';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { Page404Page } from './pages/page404/page404.page';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'events', component: EventsPage },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'profillist', component: ProfilListComponent },
  { path: 'profillist/:nickname', component: UserProfilComponent },
  { path: 'games', component: GamesPage },
  { path: 'send-message', component: SendMessageComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: Page404Page },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
