import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefijo'
})
export class PrefijoPipe implements PipeTransform {

  transform(valor: string, prefijo: string, sufijo?:number): string {
    return prefijo+valor+sufijo;
  }

}
