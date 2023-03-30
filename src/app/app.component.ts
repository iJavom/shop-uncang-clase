import { Component } from '@angular/core';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Variables (1)
  public title : string  = 'Hola mundo'; //Explicito public/private(No puede usarse en html) 
  nombre = 'Jaimito'; //Implicito
  capturoElEnvironment = environment.leccion;
  //Constructor (3)
  constructor(){
    this.nombre = "Cristian";
  }

  //Metodos (2)
  public holaSoyUnaFuncion(){
    this.nombre = "Mendoza"
  }
}
