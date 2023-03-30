import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  variableBool = true;
  listaUsuarios = [
    {id:1027676123,usuario:"Javier"},
    {id:30555,usuario:"Sasha"},
    {id:1027676160,usuario:"Pepito"},
    {id:1127676123,usuario:"Lucy"}
  ]
  status = "Listo"

  booleanoNgClass = false;
  variableBG = 'aquamarine';
  objetoParaNgStyle = {'background-color': this.variableBG, 'color':'white'};

  constructor() { }

  ngOnInit(): void {
  }


}
