import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent {

   //Variables (1)
   public title : string  = 'Hola mundo'; //Explicito public/private(No puede usarse en html) 
   nombre = 'Jaimito'; //Implicito
   
   selectedCar!: number;

   cars = [
       { id: 1, name: 'Volvo' },
       { id: 2, name: 'Saab' },
       { id: 3, name: 'Opel' },
       { id: 4, name: 'Audi' },
   ];

   //Constructor (3)
   constructor(){
     this.nombre = "Cristian";
   }
 
   //Metodos (2)
   public holaSoyUnaFuncion(){
     this.nombre = "Mendoza"
   }
 
   funcionEnPadre(paramDesdeHijo: Event){
     alert(paramDesdeHijo);
   }

}
