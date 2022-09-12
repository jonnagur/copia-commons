import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, NgxFileDropComponent } from 'ngx-file-drop';
import { FileDropConfig } from './file-drop.config';

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss']
})
export class FileDropComponent implements OnInit {

  @Input() activo = true;
  @Input() format!: string; // Por ejemplo: ".xls,.xlsx,.pdf".
  @Input() styleFormats!: 'version-campo';
  @Input() textoBoton = 'generico.btnElegirArchivo';
  @Input() sinBoton = true;
  @Input() nombreBotonArchivo!: string;
  @Input() tituloNegrita!: boolean;
  @Input() documentoExistente!: boolean;

  @Output() fileDrop: EventEmitter<File> = new EventEmitter(); // Fires one by one when dropping multiple files
  @ViewChild(NgxFileDropComponent) fileDropComponent!: NgxFileDropComponent;

  config: FileDropConfig = new FileDropConfig();
  admittedFormats!: string[];
  public fileName: any;


  constructor() { }

  ngOnInit(): void {
    if (this.format) {
      this.config.format = this.format;
    }
    this.admittedFormats = this.config.format.split(',');
  }

  dropped(files: NgxFileDropEntry[]) {

    const droppedFilesArr: File[] = [];

    for (const droppedFile of files) {

      // ¿Es un archivo?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.fileName = file.name;
          // ¿Se admite al extensión?
          if (this.activo) {
            const extension = '.' + file.name.split('.').pop();
            if (this.admittedFormats.includes(extension)) {
              this.fileDrop.emit(file);
            }
          }
        });
      }
    }
  }

  fileOver(evento: any) {

  }

  fileLeave(evento: any) {

  }

  virtualClickFileAdd() {
    this.fileDropComponent.openFileSelector();
  }

}
