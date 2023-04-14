import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruteo-ejemplo',
  templateUrl: './ruteo-ejemplo.component.html',
  styleUrls: ['./ruteo-ejemplo.component.css']
})
export class RuteoEjemploComponent implements OnInit {

  paramPorRuta : string | null  = "";
  
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      //Importante resaltar que si el param viene vacio o no trae sera null
      this.paramPorRuta = params.get('paramPorRuta');
      
    });
  }

}
