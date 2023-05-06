import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/shared/model/producto.model';
import { CategoriasService } from 'src/app/shared/service/categoria.service';
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
  categorias: string[] = [];
  filtroCategoria : string | null = null;
  mostrarFiltro : boolean = false;
  filtro:string="";
  constructor(
    private _productosService: ProductosService,
    private _categoriaService: CategoriasService
  ) {}

  ngOnInit(): void {
    this.cargarCategorias();
    this.buscarFiltrado();
  }

  cargarCategorias(){
    this._categoriaService.obtenerCategorias().subscribe(
      (res)=>{
        this.categorias = res;
      }
    );
  }

  buscarFiltrado(){
    this._productosService.obtenerProductos(this.limite,this.filtroCategoria??"").subscribe(
      (data)=>{
        this.productos = data;
      },
    );
  }

}
