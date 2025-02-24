import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './layouts/header/header.component'; // Import the component
import { AppFooterComponent } from './layouts/footer/footer.component';
import { PerfilSabroComponent } from './perfil-sabro/perfil-sabro.component';
import { FesaiComponent } from './pages/fesai/fesai.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { ClockComponent } from './pages/clock/clock.component'; // Import the component

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    PerfilSabroComponent,
    FesaiComponent,
    MenuComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
