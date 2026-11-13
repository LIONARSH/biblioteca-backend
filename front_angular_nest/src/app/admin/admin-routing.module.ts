import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './inventario/components/categoria/categoria.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LibroComponent } from './inventario/components/libro/libro.component';
import { ListaPrestamoComponent } from './prestamo/components/lista-prestamo/lista-prestamo.component';
import { ProductoComponent } from './inventario/components/producto/producto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PersonaComponent } from './components/persona/persona.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      },
      {
        path: 'producto',
        component: ProductoComponent
      },
      {
        path: 'libro',
        component: LibroComponent
      },
      {
        path: 'prestamo',
        component: ListaPrestamoComponent
      },
      {
        path: 'cliente',
        component: ClienteComponent
      },
      {
        path: 'persona',
        component: PersonaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
