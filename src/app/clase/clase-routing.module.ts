import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClaseComponent } from "./clase.component";
import { RuteoEjemploComponent } from "./routing/ruteo-ejemplo/ruteo-ejemplo.component";
import { ComponenteunoComponent } from "./animaciones/componenteuno/componenteuno.component";
import { ComponentedosComponent } from "./animaciones/componentedos/componentedos.component";


const routes : Routes=[
      //1.- Rutas especificas: Hay rutas que pueden llevar parametros y estas son las primeras que deben ser declaradas
  //2.- Rutas generales: Son rutas generales que tienden a ser componentes
  //3.- Ruta principal: que son aquelas rutas que no tienen path
  //4.- Rutas anidadas: Que son aquellas rutas que importan modulos
  //5.- Ruta 404 / No se consiguio : Que es para donde se redirige la aplicacion en caso de no conseguir rutas




  // //ELEMENTOS DEL ARRAY QUE LLEVAN LA CLASE
  // { path: 'clase', component: ClaseComponent, children:[
  //   {path: 'ejemplo/:paramPorRuta', component: RuteoEjemploComponent},
  //   {path: 'ejemplo', component: RuteoEjemploComponent}
  // ] },
    {
        path:'',
        component: ClaseComponent,
        children:[
              {path: 'ejemplo/:paramPorRuta', component: RuteoEjemploComponent},
              {path: 'ejemplo', component: RuteoEjemploComponent},
              {path: 'animaciones/componenteuno',component: ComponenteunoComponent,data:{animation : 'componenteuno'}},
              {path: 'animaciones/componentedos',component: ComponentedosComponent,data:{animation : 'componentedos'}},
            ]
        ,data:{animation : 'animations'}
        

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClaseRoutingModule {}