import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { ClaseComponent } from './clase/clase.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { InicioComponent } from './shopping/inicio/inicio.component';
import { TiendaComponent } from './shopping/tienda/tienda.component';
import { NosotrosComponent } from './shopping/nosotros/nosotros.component';
import { ContactanosComponent } from './shopping/contactanos/contactanos.component';
import { RuteoEjemploComponent } from './clase/routing/ruteo-ejemplo/ruteo-ejemplo.component';
import { ProductoComponent } from './shopping/producto/producto.component';

const routes: Routes = [
  //1.- Rutas especificas: Hay rutas que pueden llevar parametros y estas son las primeras que deben ser declaradas
  //2.- Rutas generales: Son rutas generales que tienden a ser componentes
  //3.- Ruta principal: que son aquelas rutas que no tienen path
  //4.- Rutas anidadas: Que son aquellas rutas que importan modulos
  //5.- Ruta 404 / No se consiguio : Que es para donde se redirige la aplicacion en caso de no conseguir rutas

  //ELEMENTOS DEL ARRAY QUE FORMAN PARTE DEL A TIENDA
  {
    path: 'shopping',
    component: ShoppingComponent,
    children: [

      { path: 'inicio', component: InicioComponent },
      { path: 'tienda', component: TiendaComponent },
      { path: 'producto', component: ProductoComponent},
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'contactanos', component: ContactanosComponent },
    ],
  },


  //ELEMENTOS DEL ARRAY QUE LLEVAN LA CLASE
  { path: 'clase', component: ClaseComponent, children:[
    {path: 'ejemplo/:paramPorRuta', component: RuteoEjemploComponent},
    {path: 'ejemplo', component: RuteoEjemploComponent}
  ] },

  //CASOS ESPECIFICOS
  { path: '', component: ShoppingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
