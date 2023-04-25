import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/shared/model/producto.model';
import { CategoriasService } from 'src/app/shared/service/categoria.service';
import { ProductosService } from 'src/app/shared/service/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto : Producto = new Producto();
  categorias : string[] =[];

  constructor(
    private _productosService : ProductosService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private _categoriaService : CategoriasService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      if(params.get('id')){
        this.obtenerProducto(+params.get('id')!);
      }
    });
    this.cargarCategorias();
  }

  obtenerProducto(id: number){
    this._productosService.obtenerProducto(id).subscribe(
      (res)=>{
        this.producto = res;
    });
  }

  cargarCategorias(){
    this._categoriaService.obtenerCategorias().subscribe(
      (res)=>{
        this.categorias = res;
      }
    );
  }
  
  guardarProducto(){
    if(this.producto.id == 0){
      this._productosService.guardarProducto(this.producto).subscribe(
        (res)=>{
          console.log(res);
          this.router.navigateByUrl('/shopping/tienda');
        },
        (error)=>{ //con un segundo arrowfunction podemos controlar en caso de que la peticion falle
          alert(error.message);
        }
      );
    }else{
      this._productosService.actualizarProducto(this.producto).subscribe(
        (res)=>{
          console.log(res);
          this.router.navigateByUrl('/shopping/tienda');
        },
      (error)=>{
        alert(error.message);
      }
      );
    }

  }

}
