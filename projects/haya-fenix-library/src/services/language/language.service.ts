import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: string;

  constructor(private translateService: TranslateService) {
    this.language = localStorage.getItem('lang') || 'es';
  }

  setLanguage(language: string) {
    this.language = language;
    localStorage.setItem('lang', language);
    this.translateService.use(language);
  }

  getLanguage() {
    return this.language;
  }

  translateLiteralsJson(data: any, actualKey: string = '', totalData: any = data) {
    if (Array.isArray(data)) {
      data.map((dataElement) => this.translateLiteralsJson(dataElement, '', dataElement));
    } else if (data && typeof data === 'object') {
      for (const key in data) {
        if (key !== 'stringToTranslate') {
          this.translateLiteralsJson(data[key], (actualKey?.length > 0) ? actualKey + '.' + key : key, totalData);
        } else {
          this.translateService.get(data[key].toString()).subscribe((translations: any) => totalData[actualKey] = translations);
        }
      }
    }
    return data;
  }

  translateLiteralString(key: string) {
    return this.translateService.get(key);
  }

  translateLiteralsArrayJson(arrayJson: Array<any>) {
    const result: any[] = [];
    arrayJson.map((jsonData) => result.push(this.translateLiteralsJson(jsonData)));
    return result;
  }

  translateArray(array: any) {
    const result: any = [];
    array.forEach((element: any) => {
      this.translateService.get(element).subscribe((literalTraducido) => {
        element = literalTraducido;
        result.push(element);
      });
    });
    return result;

  }

  convertirCampoSimpleAObjetoTraduccion(campo: any) {
    const objeto: any = {};

    const objetoAux: any = {};
    if (campo.nombre) {
      objetoAux.nombre = campo.nombre;
    }
    if (campo.descripcion) {
      objetoAux.descripcion = campo.descripcion;
    }
    if (campo.placeholder) {
      objetoAux.placeholder = campo.placeholder;
    }
    const listaSelect: any = [];
    if (campo.listaSelect?.length) {
      campo.listaSelect.forEach((lista: any) => {
        listaSelect.push({
          label: lista.label
        });
      });
      objetoAux.listaSelect = listaSelect;
    }
    objeto[campo.id] = objetoAux;


    console.log({ objetoCampo: JSON.stringify({ data: objeto }, null, 4) });
  }

  convertirCamposAObjetoTraduccion(grupoCampos: any) {
    const objeto: any = {};
    grupoCampos.forEach((element: any) => {
      const objetoAux: any = {};
      if (element.nombre) {
        objetoAux.nombre = element.nombre;
      }
      if (element.descripcion) {
        objetoAux.descripcion = element.descripcion;
      }
      if (element.placeholder) {
        objetoAux.placeholder = element.placeholder;
      }
      const listaSelect: any = [];
      if (element.listaSelect?.length) {
        element.listaSelect.forEach((lista: any) => {
          if (lista.label) {
            listaSelect.push({
              label: lista.label
            });
          } else if (lista.nombre) {
            listaSelect.push({
              nombre: lista.nombre
            });
          }
        });
        objetoAux.listaSelect = listaSelect;
      }
      objeto[element.id] = objetoAux;
    });

    console.log({ objetoCampo: JSON.stringify(objeto, null, ' ') });
  }

  convertirTablaAObjetoTraduccion(tabla: any) {
    const objeto: any = {};
    tabla.definicionCabecera.forEach((element: any) => {
      objeto[element.id] = element.nombre;
    });

    console.log({ objetoTabla: JSON.stringify(objeto, null, ' ') });
  }

  cambiarCamposGrupoCampos(campos: any, ruta: string) {
    campos.forEach((element: any) => {
      this.translateService.get(`${ruta}.${element.id}.nombre`).subscribe((literalTraducido) => element.nombre = literalTraducido);
      if (element.descripcion) {
        this.translateService.get(`${ruta}.${element.id}.descripcion`).subscribe((literalTraducido) => element.descripcion = literalTraducido);
      }
      if (element.placeholder) {
        this.translateService.get(`${ruta}.${element.id}.placeholder`).subscribe((literalTraducido) => element.placeholder = literalTraducido);
      }

      if ((element.tipo === 'select' && element.autoSearchSelectList === false && element.listaSelect?.length && !element.noTraducirLista) || element.forzarTraduccion) {
        this.translateService.get(`${ruta}.${element.id}.listaSelect`).subscribe((literalTraducido) => {
          if (element.campo) {
            element.campo.listaSelect.forEach((lista: any, key: any) => {
              lista.label = literalTraducido[key].label;
              if (lista.label) {
                lista.label = literalTraducido[key].label;
              } else if (lista.nombre) {
                lista.nombre = literalTraducido[key].nombre;
              }
            });
          }
          element.listaSelect.forEach((lista: any, key: any) => {
            if (lista.label) {
              lista.label = literalTraducido[key].label;
              if (element.traducirValue) {
                lista.value = literalTraducido[key].label;
              }
            } else if (lista.nombre) {
              lista.nombre = literalTraducido[key].nombre;
            }
          });
        });
      }
    });
    return campos;
  }

  cambiarCamposSimple(campo: any, ruta: string, esIterable?: boolean) {
    this.translateService.get(`${ruta}.${campo.id}.nombre`).subscribe((literalTraducido) => campo.nombre = literalTraducido);
    if (campo.descripcion) {
      this.translateService.get(`${ruta}.${campo.id}.descripcion`).subscribe((literalTraducido) => campo.descripcion = literalTraducido);
    }

    if (!esIterable && campo.autoSearchSelectList === false && campo.listaSelect?.length && campo.tipo === 'select') {
      this.translateService.get(`${ruta}.${campo.id}.listaSelect`).subscribe((literalTraducido) => {
        if (campo.campo) {
          campo.campo.listaSelect.forEach((lista: any, key: any) => {
            if (lista.label) {
              lista.label = literalTraducido[key].label;
            } else if (lista.nombre) {
              lista.nombre = literalTraducido[key].nombre;
            }
          });
        }
        campo.listaSelect.forEach((lista: any, key: any) => {
          if (lista.label) {
            lista.label = literalTraducido[key].label;
          } else if (lista.nombre) {
            lista.nombre = literalTraducido[key].nombre;
          }
        });
      });
    }

    return campo;
  }

  /*cambiarCamposTabla(tabla: InfoTabla, ruta: string) {
    tabla.definicionCabecera.forEach((element: any) => {
      this.translateService.get(`${ruta}.${element.id}`).subscribe((literalTraducido) => element.nombre = literalTraducido);

      element.filtradoSelect?.forEach((selectElement: any) => {
        this.translateService.get(selectElement.nombre).subscribe((literalTraducido) => {
          selectElement.nombre = literalTraducido;
          tabla.camposTraducidos = true;
        });
      });
    });
    return tabla;
  }*/


  /*cambiarMenuStepper(stepper: any) {
    const result: MenuItem[] = [];
    stepper.forEach((element: any) => {
      this.translateService.get(element.label).subscribe((literalTraducido) => {
        element.label = literalTraducido;
        result.push(element);
      });
    });
    return result;
  }*/

  cambiarLabels(labels: any) {
    for (const keyLabel in labels) {
      if (labels.hasOwnProperty(keyLabel)) {
        this.translateService.get(labels[keyLabel].label).subscribe((literalTraducido) => {
          labels[keyLabel].label = literalTraducido;
        });
      }
    }
    return labels;
  }


  /*cambiarTabs(tabs: Tab[]) {
    const result: Tab[] = [];
    tabs.forEach((element: any) => {
      this.translateService.get(element.title).subscribe((literalTraducido) => {
        element.title = literalTraducido;
        result.push(element);
      });
    });
    return result;
  }*/

}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const childModuleSettings = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  },
  extend: true,
  defaultLanguage: (localStorage.getItem('lang')) ?
    localStorage.getItem('lang') :
    'es'
};
