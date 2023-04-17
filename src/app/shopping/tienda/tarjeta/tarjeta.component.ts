import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/model/producto.model';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() producto : Producto = new Producto();

  constructor() { }

  ngOnInit(): void {
  }

}
