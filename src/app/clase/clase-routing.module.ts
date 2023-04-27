import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClaseComponent } from "./clase.component";
import { RuteoEjemploComponent } from "./routing/ruteo-ejemplo/ruteo-ejemplo.component";


const routes : Routes=[
    {
        path:'',
        component: ClaseComponent,
        children:[
              {path: 'ejemplo/:paramPorRuta', component: RuteoEjemploComponent},
              {path: 'ejemplo', component: RuteoEjemploComponent}
            ]

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClaseRoutingModule {}