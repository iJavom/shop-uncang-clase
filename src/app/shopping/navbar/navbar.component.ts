import { Component, EventEmitter, Output } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() cambioMenu = new EventEmitter();
  navItems = [
    {id:1,nombre:"Inicio",link:"inicio",disabled:false},
    {id:2,nombre:"Tienda",link:"tienda",disabled:false},
    {id:3,nombre:"Nosotros",link:"nosotros",disabled:false},
    {id:4,nombre:"Contactanos",link:"contactanos",disabled:false}
  ];
  nombreUsuario = "JAVIER VARGAS"
  hoy:Date = new Date();
  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) { 
      //Ejemplo de como actualizar la hora 
      // setInterval(
      //   ()=>{
      //     this.hoy = new Date();
      //     console.log('Hola');
      //   }
      // ,1000);
    }

  cambiarMenu(link:string){
    //debugger;
    this.router.navigateByUrl(`shopping/${link}`);
  }
  // Volvemos a las 8:11
  // cambiarMenu(id:number){
  //   this.cambioMenu.emit(id);
  // }

  // Es circunstancial
  // esRutaActiva(ruta: string){
  //   //debugger;
  //   const esActiva = this.activatedRoute.root.children[0].firstChild;
  //   return esActiva && esActiva.routeConfig && esActiva.routeConfig.path === ruta;
  // }


}
