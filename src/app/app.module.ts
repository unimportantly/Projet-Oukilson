import { AuthInterceptor } from './services/authInterceptor';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';

import { ProfilListComponent } from './profil-list/profil-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './profil-preview/profil.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EventsListComponent } from './events-list/events-list.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { InputTextModule } from 'primeng/inputtext';
import { Page404Page } from './pages/page404/page404.page';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayGamesSearchComponent } from './overlay-games-search/overlay-games-search.component';
import { ListboxModule } from 'primeng/listbox';
import { HomeComponent } from './home/home.component';
import { MyProfilePagePage } from './my-profile-page/my-profile-page.page';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    ProfilListComponent,
    HeaderComponent,
    LoginComponent,
    CreateAccountComponent,
    UserProfilComponent,
    SendMessageComponent,
    MyProfileComponent,
    EventsListComponent,
    GameslistComponent,
    CreateEventComponent,
    Page404Page,
    OverlayGamesSearchComponent,
    HomeComponent,
    MyProfilePagePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    ListboxModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
