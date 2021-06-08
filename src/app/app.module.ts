import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PauseComponent } from './components/pause/pause.component';
import { LargGridComponent } from './components/larg-grid/larg-grid.component';
import { CellComponent } from './components/cell/cell.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { NumberComponent } from './components/number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PauseComponent,
    LargGridComponent,
    CellComponent,
    CandidatesComponent,
    NumberComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
