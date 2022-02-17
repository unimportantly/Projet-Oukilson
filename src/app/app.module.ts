// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

// Pages
import { EventsPage } from './events/events.page';
import { GamesPage } from './games/games.page';
import { Page404Page } from './pages/page404/page404.page';
import { MyProfilePagePage } from './my-profile-page/my-profile-page.page';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventSearchComponent } from './events/event-search/event-search.component';
import { FooterComponent } from './footer/footer.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GameSearchComponent } from './games/game-search/game-search.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfilComponent } from './profil-preview/profil.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { OverlayGamesSearchComponent } from './overlay-games-search/overlay-games-search.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { AccountUpdateComponent } from './login/account-update/account-update.component';

// Services
import { AuthInterceptor } from './services/authInterceptor';

// PrimeNg
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    ProfilListComponent,
    HeaderComponent,
    LoginComponent,
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
    ContactComponent,
    OverlayGamesSearchComponent,
    Page404Page,
    MyProfilePagePage,
    CreateAccountComponent,
    CreateEventComponent,
    LoginComponent,
    AccountUpdateComponent,
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
    InputTextareaModule,
    OverlayPanelModule,
    ListboxModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
