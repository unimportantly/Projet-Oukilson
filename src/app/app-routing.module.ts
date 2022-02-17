import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { EventsPage } from './pages/events/events.page';
import { GamesPage } from './pages/games/games.page';
import { LoginComponent } from './login/login.component';
import { MyProfilePage } from './pages/my-profile-page/my-profile.page';
import { MembersPage } from './pages/members/members.page';
import { Page404 } from './pages/page404/page404';
import { SendMessageComponent } from './send-message/send-message.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'events', component: EventsPage },
  { path: 'my-profile', component: MyProfilePage },
  { path: 'members', component: MembersPage },
  { path: 'games', component: GamesPage },
  { path: 'send-message', component: SendMessageComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: Page404 },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
