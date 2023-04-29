import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

const routes: Routes = [
  {
    path:'shopping',
    loadChildren: () => import('./shopping/shopping.module').then((m) => m.ShoppingModule)
  },
  {
    path:'clase',
    loadChildren: () => import('./clase/clase.module').then((m) => m.ClaseModule)
  },

  { path: '', component: ShoppingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
