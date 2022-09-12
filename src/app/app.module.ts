import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HayaFenixLibraryModule } from 'projects/haya-fenix-library/src/lib/haya-fenix-library.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HayaFenixLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
