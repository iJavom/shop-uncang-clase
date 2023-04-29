import { Component, OnInit } from '@angular/core';
import { DataEjemploService } from 'src/app/shared/service/data-ejemplo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private nuestroService: DataEjemploService) { }

  ngOnInit(): void {
    this.nuestroService.obtenerArticulos().subscribe(
      (data)=>{
      console.log(data);
      }
    );
  }

}
