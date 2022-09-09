import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HelperService } from 'projects/haya-fenix-library/src/services/helper/helper.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  @Input() nombreBoton!: string;
  @Input() nombreImagen!: string;
  @Input() fontAwesome!: string;
  @Input() enlace!: string;
  @Input() habilitado = true;
  @Input() mostrar = true;
  @Input() descargarContenidoEnId!: string;
  @Input() hojaCSS: any;
  @Input() estilo: 'default' | 'alt' = 'default';

  @Output() eventoClick = new EventEmitter<any>();

  rutaImagen!: string;
  claseIcono!: string;

  // Para imprimir algo en pdf, tener en cuenta que la clase "hide-on-pdf" puede ocultar contenido que en la vista anterior sería visible.
  estilosOcultarEnPDF = { '.hide-on-pdf': { display: 'none' }, '.display-on-pdf': { display: 'block !important' } };

  constructor(public helperService: HelperService) { }

  ngOnInit(): void {
    if (this.helperService.isNotNull(this.fontAwesome)) {
      this.claseIcono = 'fa-' + this.fontAwesome;
    } else {
      this.rutaImagen = 'assets/img/' + this.nombreImagen;
    }
  }

  onClickButton(event: any) {
    this.eventoClick.emit(event);
  }

  public dispararEventoClick(event?: any) {
    this.onClickButton(event);
  }

}
