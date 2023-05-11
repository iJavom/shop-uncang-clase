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
import { PrefijoPipe } from '../shared/pipe/prefijo.pipe';
import { FiltroPipe } from '../shared/pipe/filtro.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { DependenciasComponent } from './dependencias/dependencias.component';
import { NgChartsModule } from 'ng2-charts';
import { AnimacionesComponent } from './animaciones/animaciones.component';
import { ComponenteunoComponent } from './animaciones/componenteuno/componenteuno.component';
import { ComponentedosComponent } from './animaciones/componentedos/componentedos.component';


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
    PrefijoPipe,
    FiltroPipe,
    DependenciasComponent,
    AnimacionesComponent,
    ComponenteunoComponent,
    ComponentedosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClaseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
    NgChartsModule
  ],
  providers:[
    DataEjemploService,
    PrefijoPipe,
    FiltroPipe,
    

  ]
})
export class ClaseModule { }
