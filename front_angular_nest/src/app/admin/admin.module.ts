import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LayoutComponent } from './layout/layout.component';
import { InventarioModule } from './inventario/inventario.module';
import { PrestamoModule } from './prestamo/prestamo.module';

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
    InventarioModule,
    PrestamoModule
  ]
})
export class AdminModule { }
