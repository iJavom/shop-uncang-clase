import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comunicacion-componentes',
  templateUrl: './comunicacion-componentes.component.html',
  styleUrls: ['./comunicacion-componentes.component.css']
})
export class ComunicacionComponentesComponent implements OnInit {

  @Input() unValorDelPadre : string ;
  @Output() unEventoParaElPadre = new EventEmitter();

  constructor() { 
    this.unValorDelPadre = "Hola";
  }

  ngOnInit(): void {
  }

  imprimirAlerta(unString:any){
    //debugger;
    alert(unString);
  }

  emitirEvento(){
    this.unEventoParaElPadre.emit('Hola soy un mensaje pasado desde el hijo');
  }

}
