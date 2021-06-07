import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PauseComponent } from './components/pause/pause.component';
import { LargGridComponent } from './components/larg-grid/larg-grid.component';
import { NineCellsComponent } from './components/nine-cells/nine-cells.component';
import { OneCellComponent } from './componnets/one-cell/one-cell.component';
import { CellComponent } from './components/cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PauseComponent,
    LargGridComponent,
    NineCellsComponent,
    OneCellComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
