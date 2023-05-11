import { trigger, state, style, transition, animate  } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.css'],
  animations:[
    //Ejemplo basico:
    trigger('cambioBasico',[
      state('estadoInicial', style({width: '300px',height: '300px'})),
      state('estadoFinal',style({width: '500px', height: '500px'})),
      transition('estadoInicial => estadoFinal',animate('1s ease-in'))
    ]
    ),
    //Ejemplo cambio estado:
    trigger('cambioEstado',[
      // state('base',style({})),//No es obligatorio puesto que puede generar duplicidad de codigo
      state('rotado', style({transform: 'rotate(115deg)'})),
      state('estirado', style({height:'600px'})),
      state('ensanchado',style({width:'600px'})),
      transition('* <=> *',animate('750ms ease-in-out'))
    ]
    ),
    //Ejemplo Animaciones de entrada y salida de componentes
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity: 0, transform: 'translateX(45px)'}),
        animate('750ms',style({opacity: 1, transform: 'translateX(0)'})),
      ]),
      transition(':leave',[
        animate('750ms',style({opacity: 0 , transform: 'translateX(45px)'})),
      ]),
    ])
  ]
})
export class AnimacionesComponent implements OnInit {
  
  public estado = 'estadoInicial';
  public estadoCambio : string = 'base';
  public anchura : number = 600;
  public mostrar = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.estado = 'estadoFinal';
    },3000);
  }

  cambiarEstado(param: string){
    this.estadoCambio = param;
    this.anchura= Math.floor(Math.random() * (600 - 300) + 300);
  }

}
