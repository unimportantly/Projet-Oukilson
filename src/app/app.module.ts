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
import { EventsListComponent } from './events-list/events-list.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { InputTextModule } from 'primeng/inputtext';
import { EventDetailsComponent } from './event-details/event-details.component';
import {CardModule} from 'primeng/card';

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
    GameslistComponent,
    CreateEventComponent,
    EventDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
