import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './service/productos.service';
import { CategoriasService } from './service/categoria.service';
import { DataEjemploService } from './service/data-ejemplo.service';



@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    ProductosService,
    CategoriasService,
    DataEjemploService
  ]
})
export class SharedModule {}
