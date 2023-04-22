import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/shared/model/producto.model';
import { ProductosService } from 'src/app/shared/service/productos.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() producto : Producto = new Producto();
  @Output() refrescar = new EventEmitter();
  constructor(
    private _productosService : ProductosService
  ) { }

  ngOnInit(): void {
  }

  eliminarProducto(id:number){
    this._productosService.eliminarProducto(id).subscribe(
      (data)=>{
        alert("Eliminado exitosamente!");
        this.refrescar.emit();
      }
    );
  }

}
