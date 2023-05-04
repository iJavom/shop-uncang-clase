import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: string[], filtro: string): string[] {
    let resultado = value.filter((elemento)=>{
      return elemento.includes(filtro)
    });
    return resultado;
  }

}
