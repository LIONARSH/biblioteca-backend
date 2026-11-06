import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPrestamoComponent } from './components/lista-prestamo/lista-prestamo.component';
import { NuevoPrestamoComponent } from './components/nuevo-prestamo/nuevo-prestamo.component';

@NgModule({
  declarations: [
    ListaPrestamoComponent,
    NuevoPrestamoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaPrestamoComponent,
    NuevoPrestamoComponent
  ]
})
export class PrestamoModule { }
