import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HayaFenixLibraryComponent } from './haya-fenix-library.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { BotonModule } from './componentes/boton/boton.module';
import { AgendaModule } from './componentes/agenda/agenda.module';
import { CampoComponent } from './componentes/campo/campo.component';
import { CampoModule } from './componentes/campo/campo.module';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component';
import { CheckboxModule } from './componentes/checkbox/checkbox.module';
import { RadioComponent } from './componentes/radio/radio.component';
import { RadioModule } from './componentes/radio/radio.module';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { SpinnerModule } from './componentes/spinner/spinner.module';
import { FileDropComponent } from './componentes/file-drop/file-drop.component';
import { FileDropModule } from './componentes/file-drop/file-drop.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../services/language/language.service';
import { HttpClient } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { PestanasComponent } from './componentes/pestanas/pestanas.component';
import { PestanasModule } from './componentes/pestanas/pestanas.module';


@NgModule({
  declarations: [
    HayaFenixLibraryComponent,
    AgendaComponent,
    BotonComponent,
    CampoComponent,
    CheckboxComponent,
    FileDropComponent,
    PestanasComponent,
    RadioComponent,
    SpinnerComponent,
    FileDropComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BotonModule,
    AgendaModule,
    CampoModule,
    CheckboxModule,
    RadioModule,
    SpinnerModule,
    FileDropModule,
    NgxFileDropModule,
    PestanasModule
  ],
  exports: [
    HayaFenixLibraryComponent,
    AgendaComponent,
    BotonComponent,
    CampoComponent,
    CheckboxComponent,
    PestanasComponent,
    RadioComponent,
    SpinnerComponent,
    FileDropComponent
  ]
})
export class HayaFenixLibraryModule { }
