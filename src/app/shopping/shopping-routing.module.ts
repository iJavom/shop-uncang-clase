import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingComponent } from "./shopping.component";
import { ContactanosComponent } from "./contactanos/contactanos.component";
import { InicioComponent } from "./inicio/inicio.component";
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { ProductoComponent } from "./producto/producto.component";
import { TiendaComponent } from "./tienda/tienda.component";



const routes : Routes=[
  //ELEMENTOS DEL ARRAY QUE FORMAN PARTE DEL A TIENDA
  {
    path: '',
    component: ShoppingComponent,
    children: [
      { path: 'producto/:id', component: ProductoComponent, data: { animation : 'producto'}},
      { path: 'inicio', component: InicioComponent, data: { animation : 'inicio'} },
      { path: 'tienda', component: TiendaComponent, data: { animation : 'shopping'} },
      { path: 'producto', component: ProductoComponent , data: { animation : 'producto'}},
      { path: 'nosotros', component: NosotrosComponent, data: { animation : 'nosotros'} },
      { path: 'contactanos', component: ContactanosComponent, data: { animation : 'contactanos'} },
    ], data: { animation : 'shopping'}
  },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule {}