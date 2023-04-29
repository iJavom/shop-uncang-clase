import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../shared/component/not-found/not-found.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductoComponent } from './producto/producto.component';
import { ShoppingComponent } from './shopping.component';
import { TarjetaComponent } from './tienda/tarjeta/tarjeta.component';
import { TiendaComponent } from './tienda/tienda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingRoutingModule } from './shopping-routing.module';



@NgModule({
  declarations: [
        ShoppingComponent,
        NavbarComponent,
        InicioComponent,
        TiendaComponent,
        NosotrosComponent,
        TarjetaComponent,
        ContactanosComponent,
        NotFoundComponent,
        ProductoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
