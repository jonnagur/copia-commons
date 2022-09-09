import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgendaModule, BotonModule, CampoModule, CheckboxModule, HayaFenixLibraryModule } from 'haya-fenix-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HayaFenixLibraryModule,
    BotonModule,
    AgendaModule,
    CampoModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
