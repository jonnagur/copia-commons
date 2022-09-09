import { Injectable } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
//import { InfoTabla } from "src/app/reutilizables/table/info-tabla.model";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  constructor(
  ) { }

  /**
   * Tests if the passed value isn't null or undefined in a robust way
   */
  public isNotNull(value: any) {
    return value !== undefined && value !== null;
  }

  /**
   * Regresa una copia de un array rompiendo su referencia.
   */
  public copyArrayWithoutReference(toCopy: any[]): any[] {
    const stringified = toCopy === null ? null : [...toCopy];
    return stringified!;
  }

  /**
   * Regresa una copia de un objeto rompiendo su referencia.
   */
  public copyObjectWithoutReference(toCopy: any): any {
    return { ...toCopy };
  }

  /**
   * Devuelve un objecto con los actuales ID desde la ruta actual hasta el padre más alto
   */
  public obtenerParametrosUrl(route: ActivatedRoute): Promise<any> {
    return new Promise(async (resolve) => {
      let paramsObj = {};
      let hasParent = true;
      let currentRoute = route;

      while (hasParent) {
        // Get all values from current route
        await currentRoute.params.subscribe((params: Params) => {
          paramsObj = Object.assign(paramsObj, params);
        });
        if (currentRoute.parent) {
          currentRoute = currentRoute.parent;
        } else {
          hasParent = false;
        }
      }
      resolve(paramsObj);
    });
  }

  public objectIsEmpty(obj: any) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  datesAreEqual(a: Date, b: Date) {
    return a.getTime() === b.getTime();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  /*formatearTablaConSubtablas(datos: any[], identificadorSubtabla: string, infoSubtabla: InfoTabla) {
    const tabla = [...datos];
    tabla.forEach((linea: any) => {
      const subtabla = infoSubtabla;
      subtabla.listaDatos = linea[identificadorSubtabla];
      linea._tablaDesplegable = subtabla;
    });
    return tabla;
  }*/

  debug(...valuesForConsoleLog: any[]) {
    // if (environment.debugMode) {
    // console.log(...valuesForConsoleLog);
    // }
  }

  debounce(func: () => any, wait: number, variableToSaveTimeout: any) {
    if (variableToSaveTimeout) {
      clearTimeout(variableToSaveTimeout);
    }
    variableToSaveTimeout = setTimeout(func, wait);
  };

  getDecimalFormat(value: number) {
    return value.toLocaleString('es-ES');
  }

  arrayBufferToBase64(buffer: ArrayBuffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  clean(obj: any) {
    for (const property in obj) {
      if (obj[property] === null || obj[property] === undefined) {
        delete obj[property];
      }
    }
    return obj;
  }

}
