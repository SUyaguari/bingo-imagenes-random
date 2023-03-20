import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { GridComponent } from './grid/grid.component';
import { NumerosComponent } from './numeros/numeros.component';
import { PopComponentComponent } from './pop-component/pop-component.component';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AleatorioComponent,
    GridComponent,
    NumerosComponent,
    PopComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
