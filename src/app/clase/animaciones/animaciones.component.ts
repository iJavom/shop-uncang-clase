import { trigger, state, style, transition, animate, keyframes, query, group, sequence, stagger, animateChild  } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/shared/animations/animations';

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
    //Ejemplo cambio parametros:
    trigger('cambioPorParametros',[
      state('estado1, estado2',
            style({
              width: '{{ancho}}px',
              height: '{{alto}}px'
            }),
            {
              params:{
                ancho: 300,
                alto: 300
              }
            }
      ),
      transition('* <=> *', animate('750ms ease-in'))
    ]),
    //Ejemplo Animaciones de entrada y salida de componentes (gracias al :enter que indica cuando se renderiza y el leave que es cuando se elimina)
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity: 0, transform: 'translateX(450px)'}),
        animate('750ms',style({opacity: 1, transform: 'translateX(0)'})),
      ]),
      transition(':leave',[
        animate('750ms',style({opacity: 0 , transform: 'translateX(450px)'})),
      ]),
    ]),
    //Animaciones con multiples fases (keyframes ejemplo)
    trigger('fadeInOutKey',[
      transition(':enter',[
        style({opacity:0, transform: 'translateY(-500px)'}),
        animate('750ms ease-out', keyframes([
          style({opacity: 1, transform: 'translateY(220px)'}),
          style({transform: 'translateY(-10px)'}),
          style({transform: 'translateY(0px)'}),
        ]))
      ]), //ahora agregamos el leave aca
      transition(':leave',[
        style({opacity: 1 , transform: 'translateY(0px)'}),
        animate('750ms ease-in', keyframes([
          style({transform: 'translateY(-30px)', offset: 0.6}),
          style({ opacity: 0, transform: 'translateY(500px)', offset:1})
        ]))
      ])
    ]),

    //animaciones agrupadas
    //gracias al query podemos capturar multiples elementos como si fueran css
    trigger('fadeInGroup',[
      transition('* <=> *',[
        query('app-componenteuno',[
          style({ opacity:0 , transform: 'scale(0.8)' }),
          group([
            animate('1250ms',style({ opacity: 1 })),
            animate('750ms ease-in', style({transform: 'scale(1)'}))
          ])
        ])
      ])
    ]),

    //animaciones secuenciales 
    trigger('fadeInSequence',[
      transition('* <=> *',[
        query('.animacion',[
          style({ opacity:0 , transform: 'scale(0)' }),
          sequence([
            animate('1000ms',style({opacity:1 , transform: 'scale(0, .01)'})),
            animate('600ms'), style({ transform: 'scale(1, .01)'}),
            animate('600ms'), style({ transform: 'scale(1, 1)'} )
          ])
        ])
      ])
    ]),

    //animacion de padre a hijos (animacion de hijos)
    trigger('slideInRightList',
      [
        transition(':enter, :leave', [
          query('@*',animateChild(),{optional:true})
        ])
      ]
    ),
    trigger('slideInRight',[
      transition(':enter',[
        style({transform: 'translateX(100%)', opacity:0 }),
        animate('500ms ease-in'), style({opacity: 1, transform: 'translate(0%)'})
      ]),
      transition(':leave',[
        style({ transform: 'translate(0%)', opacity: 1}),
        animate('500ms ease-in'), style({opacity: 0, transform: 'translate(100%)'})
      ])
    ]),

    //Animaciones entre componentes
    slideInAnimation



  ]
})
export class AnimacionesComponent implements OnInit {
  
  public estado = 'estadoInicial';
  public estadoCambio : string = 'base';
  public anchura : number = 600;
  public mostrar = true;

  public mostrarKeyEjemplo = true;

  public mostrarGrupoEjemplo = true;
  public mostrarSeqEjemplo = true;

  public mostrarMultipleEjemplo = true;

  public varEstadoParam = {
    value:'estado1',
    params:{
      ancho: 300,
      alto: 300
    }
  }

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

  cambiarTamano(){
    
    this.varEstadoParam = {
      value: this.varEstadoParam.value === 'estado1' ? 'estado2':'estado1',
      params:{
        ancho : Math.floor(Math.random() * (600 - 300) + 300),
        alto: Math.floor(Math.random() * (600 - 300) + 300)
      }
    }
    // Este fallo...
    // this.varEstadoParam.value = this.varEstadoParam.value === 'estado1' ? 'estado2':'estado1';
    // this.varEstadoParam.params.alto =  Math.floor(Math.random() * (600 - 300) + 300);
    // this.varEstadoParam.params.ancho =  Math.floor(Math.random() * (600 - 300) + 300);
  }

  prepareRoute(outlet: RouterOutlet){
    console.log(outlet.activatedRouteData['animation']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
