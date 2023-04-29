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
      { path: 'producto/:id', component: ProductoComponent},
      { path: 'inicio', component: InicioComponent },
      { path: 'tienda', component: TiendaComponent },
      { path: 'producto', component: ProductoComponent},
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'contactanos', component: ContactanosComponent },
    ],
  },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule {}