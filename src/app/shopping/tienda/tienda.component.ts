import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/shared/model/producto.model';
import { DataEjemploService } from 'src/app/shared/service/data-ejemplo.service';
import { ProductosService } from 'src/app/shared/service/productos.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  paramPorRuta: any;
  productos: Producto[] = [];
  limite:string ="";

  constructor(
    private route: ActivatedRoute,
    private dataEjemploService: DataEjemploService,
    private _productosService: ProductosService
  ) {}

  ngOnInit(): void {
    //this.productos = this.dataEjemploService.obtenerArticulos();
    this._productosService.obtenerProductos().subscribe(
      (data)=>{
        this.productos = data;
      },
    );
  }

  buscarFiltrado(){
    this._productosService.obtenerProductosFiltrado(this.limite).subscribe(
      (data)=>{
        this.productos = data;
      },
    );
  }
}
