import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgendaModule, BotonModule, CampoModule, CheckboxModule, FileDropModule, HayaFenixLibraryModule } from 'haya-fenix-library';

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
    CheckboxModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
