import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';

import { ProfilListComponent } from './profil-list/profil-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './profil-preview/profil.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsPage } from './events/events.page';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { GamesPage } from './games/games.page';
import { GameSearchComponent } from './games/game-search/game-search.component';
import { EventSearchComponent } from './events/event-search/event-search.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    ProfilListComponent,
    HeaderComponent,
    HomeComponent,
    CreateAccountComponent,
    UserProfilComponent,
    SendMessageComponent,
    MyProfileComponent,
    EventsListComponent,
    GamesListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventsPage,
    GamesListComponent,
    GameDetailsComponent,
    GamesPage,
    GameSearchComponent,
    EventSearchComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    TableModule,
    InputTextareaModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
