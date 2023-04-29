import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CiclosDeVidaComponent } from './clase/ciclos-de-vida/ciclos-de-vida.component';
// import { ComponentesComponent } from './clase/componentes/componentes.component';
// import { BindingsComponent } from './clase/bindings/bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CalculadoraComponent } from './clase/calculadora/calculadora.component';
// import { DirectivesComponent } from './clase/directives/directives.component';
// import { ComunicacionComponentesComponent } from './clase/comunicacion-componentes/comunicacion-componentes.component';
// import { ClaseComponent } from './clase/clase.component';
import { DataEjemploService } from './shared/service/data-ejemplo.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './shared/service/productos.service';
import { CategoriasService } from './shared/service/categoria.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule
  ],
  providers: [
    DataEjemploService,
    ProductosService,
    CategoriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
