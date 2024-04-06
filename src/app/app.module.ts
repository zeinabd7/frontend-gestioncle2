import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RemiseModule } from './remise/remise.module';
import { ImmeubleModule } from './immeuble/immeuble.module';
import { CoproprietaireModule } from './coproprietaire/coproprietaire.module';
import { LotModule } from './lot/lot.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    RemiseModule,
    ImmeubleModule,
    CoproprietaireModule,
    LotModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
