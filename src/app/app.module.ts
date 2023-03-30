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

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    CiclosDeVidaComponent,
    BindingsComponent,
    CalculadoraComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
