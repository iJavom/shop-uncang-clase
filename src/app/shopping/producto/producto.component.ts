import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/shared/model/producto.model';
import { ProductosService } from 'src/app/shared/service/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto : Producto = new Producto();
  constructor(
    private _productosService : ProductosService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  guardarProducto(){
    this._productosService.guardarProducto(this.producto).subscribe(
      (jaimito)=>{
        console.log(jaimito);
        this.router.navigateByUrl('/shopping/tienda');
      }
    );
  }

}
