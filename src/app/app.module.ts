// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

// Pages
import { EventsPage } from './pages/events/events.page';
import { GamesPage } from './pages/games/games.page';
import { Page404 } from './pages/page404/page404';
import { MyProfilePage } from './pages/my-profile-page/my-profile.page';
import { MembersPage } from './pages/members/members.page';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { EventDetailsComponent } from './pages/events/event-details/event-details.component';
import { EventsListComponent } from './pages/events/events-list/events-list.component';
import { EventSearchComponent } from './pages/events/event-search/event-search.component';
import { FooterComponent } from './footer/footer.component';
import { GameDetailsComponent } from './pages/games/game-details/game-details.component';
import { GamesListComponent } from './pages/games/games-list/games-list.component';
import { GameSearchComponent } from './pages/games/game-search/game-search.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MemberListComponent } from './pages/members/member-list/member-list.component';
import { MemberDetailsComponent } from './pages/members/member-details/member-details.component';
import { MemberSearchComponent } from './pages/members/member-search/member-search.component';
import { MyProfileComponent } from './pages/my-profile-page/my-profile/my-profile.component';
import { OverlayGamesSearchComponent } from './pages/create-event/overlay-games-search/overlay-games-search.component';
import { SendMessageComponent } from './send-message/send-message.component';

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
    ContactComponent,
    CreateAccountComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventsPage,
    EventSearchComponent,   
    EventsListComponent,    
    FooterComponent,
    GamesListComponent,
    GameDetailsComponent,
    GamesPage,
    GameSearchComponent,    
    HeaderComponent,
    LoginComponent,
    MembersPage,
    MemberListComponent,
    MemberDetailsComponent,
    MemberSearchComponent,
    MyProfilePage,
    MyProfileComponent,
    OverlayGamesSearchComponent,    
    Page404,
    SendMessageComponent,
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
