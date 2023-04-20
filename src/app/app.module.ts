import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiclosDeVidaComponent } from './clase/ciclos-de-vida/ciclos-de-vida.component';
import { ComponentesComponent } from './clase/componentes/componentes.component';
import { BindingsComponent } from './clase/bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './clase/calculadora/calculadora.component';
import { DirectivesComponent } from './clase/directives/directives.component';
import { ComunicacionComponentesComponent } from './clase/comunicacion-componentes/comunicacion-componentes.component';
import { ClaseComponent } from './clase/clase.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NavbarComponent } from './shopping/navbar/navbar.component';
import { InicioComponent } from './shopping/inicio/inicio.component';
import { TiendaComponent } from './shopping/tienda/tienda.component';
import { NosotrosComponent } from './shopping/nosotros/nosotros.component';
import { ContactanosComponent } from './shopping/contactanos/contactanos.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { RoutingComponent } from './clase/routing/routing.component';
import { RuteoEjemploComponent } from './clase/routing/ruteo-ejemplo/ruteo-ejemplo.component';
import { DataEjemploService } from './shared/service/data-ejemplo.service';
import { TarjetaComponent } from './shopping/tienda/tarjeta/tarjeta.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelsComponent } from './clase/models/models.component';
import { ServicesComponent } from './clase/services/services.component';
import { ProductosService } from './shared/service/productos.service';
import { ProductoComponent } from './shopping/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,

    //Shopping componentes
    ShoppingComponent,
    NavbarComponent,
    InicioComponent,
    TiendaComponent,
    NosotrosComponent,
    TarjetaComponent,

    //Clases componentes
    ComponentesComponent,
    CiclosDeVidaComponent,
    BindingsComponent,
    CalculadoraComponent,
    DirectivesComponent,
    ComunicacionComponentesComponent,
    ClaseComponent,
    ContactanosComponent,
    NotFoundComponent,
    RoutingComponent,
    RuteoEjemploComponent,
    ModelsComponent,
    ServicesComponent,
    ProductoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataEjemploService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
