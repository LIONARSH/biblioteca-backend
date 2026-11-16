import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';

import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { LibroComponent } from './components/libro/libro.component';
import { CategoriaService } from './services/categoria.service';
import { LibroService } from './services/libro.service';

@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent,
    LibroComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    ToolbarModule,
    DropdownModule,
    InputSwitchModule
  ],
  providers: [
    CategoriaService,
    LibroService
  ],
  exports: [
    ProductoComponent,
    CategoriaComponent,
    LibroComponent
  ]
})
export class InventarioModule { }
