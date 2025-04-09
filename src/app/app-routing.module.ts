import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FesaiComponent } from './pages/fesai/fesai.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { ClockComponent } from './pages/clock/clock.component';
import { SheetsComponent } from './pages/sheets/sheets.component'; // Import the component

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'fesai', component: FesaiComponent },
  { path: 'celulares', component: SheetsComponent },
  { path: 'clock', component: ClockComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
