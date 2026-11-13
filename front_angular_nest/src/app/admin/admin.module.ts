import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { InventarioModule } from './inventario/inventario.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { CategoriaService } from './inventario/services/categoria.service';

@NgModule({
  declarations: [
    PerfilComponent,
    ClienteComponent,
    PersonaComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    TableModule,
    InventarioModule,
    PrestamoModule
  ],
  providers: [
    CategoriaService
  ]
})
export class AdminModule { }
