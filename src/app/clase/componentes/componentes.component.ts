import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {

  constructor() { }

  //ngOnInit(4) Despues del constructor y despues de haber renderizado la pagina...
  ngOnInit(): void {
  }

}
