import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppHeaderComponent } from './layouts/header/header.component'; // Import the component
import { AppFooterComponent } from './layouts/footer/footer.component';
import { PerfilSabroComponent } from './perfil-sabro/perfil-sabro.component';
import { FesaiComponent } from './pages/fesai/fesai.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { ClockComponent } from './pages/clock/clock.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { SheetsComponent } from './pages/sheets/sheets.component'; // Import the component
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    PerfilSabroComponent,
    FesaiComponent,
    MenuComponent,
    ClockComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SheetsComponent, // Ensure this is in the correct array
    SheetsComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
