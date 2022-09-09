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



@NgModule({
  declarations: [
    HayaFenixLibraryComponent,
    AgendaComponent,
    BotonComponent,
    CampoComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    BotonModule,
    AgendaModule,
    CampoModule,
    CheckboxModule
  ],
  exports: [
    HayaFenixLibraryComponent,
    AgendaComponent,
    BotonComponent,
    CampoComponent,
    CheckboxComponent
  ]
})
export class HayaFenixLibraryModule { }
