import { Component, OnInit, inject } from '@angular/core';
import { Table } from 'primeng/table';
import { ProductoService } from '../../services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit {

  private productoService = inject(ProductoService);

  products: any[] = [
    { id: 1, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 2, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 3, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 4, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 5, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 6, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 7, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 8, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 9, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 10, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 11, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 12, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 13, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 14, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 15, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' },
    { id: 16, nombre: 'Teclado', precio: 394.96, categoria_id: 5, stock: 12, estado: 'COMPLETO' }
  ];

  cols: any[] = [];

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'precio', header: 'Precio' },
      { field: 'categoria_id', header: 'Categoria' },
      { field: 'stock', header: 'Stock' },
      { field: 'estado', header: 'Estado' }
    ];

    this.productoService.funListar().subscribe({
      next: (res: any) => {
        if (Array.isArray(res) && res.length > 0) {
          this.products = res;
        }
      },
      error: (err) => {
        // En caso de que la tabla esté vacía aún o el backend no esté encendido, mantiene los productos simulados para la clase
        console.log('Cargando productos simulados de clase 16');
      }
    });
  }

  openNew() {
    Swal.fire({
      title: 'Nuevo Producto',
      text: 'Función openNew() llamada',
      icon: 'info'
    });
  }

  editProduct(prod: any) {
    Swal.fire({
      title: 'Editar Producto',
      text: `Editando: ${prod.nombre} (ID: ${prod.id})`,
      icon: 'info'
    });
  }

  deleteProduct(prod: any) {
    Swal.fire({
      title: '¿Está seguro de eliminar el producto?',
      text: '¡Una vez eliminado no se podrá recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.products = this.products.filter(val => val.id !== prod.id);
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
      }
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
