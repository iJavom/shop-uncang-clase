import { Component } from '@angular/core';

@Component({
  selector: 'app-ciclos-de-vida',
  templateUrl: './ciclos-de-vida.component.html',
  styleUrls: ['./ciclos-de-vida.component.css']
})
export class CiclosDeVidaComponent {
  i = 0;
  booleanoNgClass = true;
  constructor(){
    debugger;
    console.log(`${this.i}- Soy el constructor`);
    this.i++;
  }

  ngOnchanges(){
    //Se ejecuta cuando cambia un valor de un data binding
    debugger;
    console.log(`${this.i}- Soy el ngOnchanges`);
    this.i++;
  }

  ngOnInit(){
    //Se ejecuta una vez se hayan inicializado las propiedades enlazadas del componente. Se utiliza generalmente para cargar datos
    debugger;
    console.log(`${this.i}- Soy el ngOnInit`);
    this.i++;
  }

  ngDoCheck(){
    //Se ejecuta cada vez que angular realiza una deteccion de cambios. Se uso para acciones cuando se detectas cambios
    debugger;
    console.log(`${this.i}- Soy el ngDoCheck`);
    this.i++;
  }

  ngAfterContetInit(){
    //Se ejecuta una vez que se proyecte el contenido de etiquetas ng-content
    debugger;
    console.log(`${this.i}- Soy el ngAfterContetInit`);
    this.i++;
  }

  ngAfterContentChecked(){
    //Se ejecuta despues de cada deteccion de cambios en el contenido
    debugger;
    console.log(`${this.i}- Soy el ngAfterContentChecked`);
    this.i++;
  }

  ngAfterViewInit(){
    //Se ejecuta una vez se haya inicializado y verificado las vistas incluidas las hijas
    debugger;
    console.log(`${this.i}- Soy el ngAfterViewInit`);
    this.i++;
  }

  ngAfterViewChecked(){
    //Se ejecuta despues de cada deteccion de cambios en la vistas y sus hijas
    debugger;
    console.log(`${this.i}- Soy el ngAfterViewChecked`);
    this.i++;
  }


  ngOnDestroy(){
    //Se ejecuta justo antes de que angular destruya el componente. Generalmente se usa para liberar recursos
    debugger;
    console.log(`${this.i}- Soy el ngOnDestroy`);
    this.i++;
  }



}