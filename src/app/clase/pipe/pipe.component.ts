import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  data = "Hola";
  numeroPi = Math.PI;

  precioEmpanada = 2000.12;
  constructor() { }

  ngOnInit(): void {
  }

}
