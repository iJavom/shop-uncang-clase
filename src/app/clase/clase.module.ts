import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaseComponent } from './clase.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { CiclosDeVidaComponent } from './ciclos-de-vida/ciclos-de-vida.component';
import { BindingsComponent } from './bindings/bindings.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ComunicacionComponentesComponent } from './comunicacion-componentes/comunicacion-componentes.component';
import { DirectivesComponent } from './directives/directives.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { ModelsComponent } from './models/models.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { RoutingComponent } from './routing/routing.component';
import { RuteoEjemploComponent } from './routing/ruteo-ejemplo/ruteo-ejemplo.component';
import { ServicesComponent } from './services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaseRoutingModule } from './clase-routing.module';
import { ModulosComponent } from './modulos/modulos.component';
import { HttpClientModule } from '@angular/common/http';
import { DataEjemploService } from '../shared/service/data-ejemplo.service';
import { SharedModule } from '../shared/shared.module';
import { PipeComponent } from './pipe/pipe.component';



@NgModule({
  declarations: [
    ClaseComponent,
    ComponentesComponent,
    CiclosDeVidaComponent,
    BindingsComponent,
    CalculadoraComponent,
    DirectivesComponent,
    ComunicacionComponentesComponent,
    RoutingComponent,
    RuteoEjemploComponent,
    ModelsComponent,
    ServicesComponent,
    HttpclientComponent,
    ReactFormComponent,
    ModulosComponent,
    PipeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClaseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers:[
    DataEjemploService
  ]
})
export class ClaseModule { }