import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { LibroComponent } from './components/libro/libro.component';

@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent,
    LibroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductoComponent,
    CategoriaComponent,
    LibroComponent
  ]
})
export class InventarioModule { }
