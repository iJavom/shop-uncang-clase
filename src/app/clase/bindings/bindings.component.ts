import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  ejemploInterpolacion = "Hola soy un ejemplo de interpolacion"
  botonDesactivado = false;
  placaOculta = true;
  imgUrl = 'https://img.freepik.com/foto-gratis/guacamaya-roja-busca-semillas-nido-paja_493961-1283.jpg?w=2000';
  twoProducto = "";

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.placaOculta = false;
      this.twoProducto = "SORPRESA";
    },3000);
  }

  retornoInterpolacion(){
    return "Hola, apareci aunque soy un metodo";
  }

  mostrarMensajeConsoleLog(mensaje:string){
    console.log(`Me han dado click y el mensaje es ${mensaje}`);
  }

  metodoEjemploEvent(event:Event){
    //debugger;
    console.log(event);
  }

  borrarInput(){
    this.twoProducto ="";
  }

}
