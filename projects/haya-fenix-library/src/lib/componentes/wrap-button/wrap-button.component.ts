import { Component, OnInit, Input, TemplateRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { HelperService } from 'projects/haya-fenix-library/src/services/helper/helper.service';

@Component({
  selector: 'app-wrap-button',
  templateUrl: './wrap-button.component.html',
  styleUrls: ['./wrap-button.component.scss']
})
export class WrapButtonComponent implements OnInit, OnChanges {

  @Input() contentTemplate!: TemplateRef<any>;
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() tipo: 'basico' | 'separado' = 'basico';
  @Input() isCollapsed = false;
  @Input() widthPersonalizado = false;
  // Guarda el estilo de display que tenía el elemento que intentamos ocultar para aplicarle el mismo. Se puede preconfigurar el estilo con el que empieza para casos especiales.
  @Input() displayPrevio!: string;
  @Input() estilo: 'predeterminado' | 'inverso' = 'predeterminado';


  botonDesplegar = false;
  printedElement: any;


  constructor(private renderer: Renderer2, private helperService: HelperService) { }

  ngOnInit(): void {
    if (this.tipo === 'separado') {
      this.printedElement = this.contentTemplate;
      this.toggleRenderedStyle();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    //if (changes.isCollapsed) {
    // if (this.tipo === 'separado') {
    //   //this.printedElement = this.contentTemplate;
    //   const current = changes.isCollapsed.currentValue;
    //   // this.isCollapsed = null;
    //   setTimeout(() => {
    //     this.toggleRenderedStyle(changes.isCollapsed.currentValue);
    //   }, 500);
    // }
    // this.toggleRenderedStyle(changes.isCollapsed.currentValue);
    //}
  }

  wrapClickAction() {
    this.isCollapsed = !this.isCollapsed;

    if (this.tipo === 'separado') {
      this.toggleRenderedStyle();
    }

  }

  toggleRenderedStyle(isCollapsed = this.isCollapsed) {
    if (isCollapsed) {
      this.displayPrevio = this.printedElement.style.display;
      this.renderer.setStyle(this.printedElement, 'opacity', '0');
      this.renderer.setStyle(this.printedElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.printedElement, 'display', this.displayPrevio);
      this.renderer.setStyle(this.printedElement, 'opacity', '1');
    }
  }

}
