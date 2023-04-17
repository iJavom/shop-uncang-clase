import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/shared/model/producto.model';
import { DataEjemploService } from 'src/app/shared/service/data-ejemplo.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  
  paramPorRuta : any;
  productos : Producto[] = [];

  constructor( private route: ActivatedRoute, private dataEjemploService : DataEjemploService) { }

  ngOnInit(): void {
    //this.productos = this.dataEjemploService.obtenerArticulos();
    this.dataEjemploService.obtenerArticulos().subscribe(
      (data)=>{
        this.productos = data;
      }
    );
  };

}
