import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../shared/animations/animations';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  animations:[
    slideInAnimation
  ]
})
export class ShoppingComponent implements OnInit {
  menuActivo = 1;
  

  constructor() { }

  ngOnInit(): void {
  }

  asignarMenuActivo(id:any){
    //debugger;
    this.menuActivo = id;
  }

  obtenerData(outlet: RouterOutlet){
    return outlet?.activatedRouteData['animation'];
  }

}
