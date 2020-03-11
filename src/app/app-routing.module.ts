import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';


const routes: Routes = [
  {
    path: 'cliente',
    component: ClientesListaComponent
  },
  {
    path: 'cliente/salvar',
    component: ClienteDetalheComponent
  },
  {
      path : 'cliente/salvar/:id',
      component: ClienteDetalheComponent
  },
  {
    path : 'cliente/:id',
    component: ClientesListaComponent
  },
  {
    path: '',
    component: ClientesListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
