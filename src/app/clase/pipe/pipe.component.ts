import { Component, OnInit } from '@angular/core';
import { PrefijoPipe } from 'src/app/shared/pipe/prefijo.pipe';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  data = "Hola";
  numeroPi = Math.PI;

  precioEmpanada = 2000.12;
  porcentajeEjemplo = 0.0912;

  mensajeEjemplo="Soy un mensaje"
  filtro = "";
  variableEjemplo= 'Hola gatos';

  animales = ['perro','gato','pez','loro'];

  fechaHoy = new Date(); 
  constructor(
    private prefijoPipe : PrefijoPipe
  ) { 
    
  }

  ngOnInit(): void {
  }

}
