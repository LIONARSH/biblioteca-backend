import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { LibroService } from '../../services/libro.service';
import { CategoriaService } from '../../services/categoria.service';
import Swal from 'sweetalert2';

interface Libro {
  id?: number;
  titulo: string;
  autor: string;
  isbn: string;
  disponible: boolean;
  categoriaId?: number;
  categoria?: { id: number; nombre: string };
}

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.scss'
})
export class LibroComponent implements OnInit {

  private libroService = inject(LibroService);
  private categoriaService = inject(CategoriaService);

  libros: Libro[] = [];
  categorias: any[] = [];
  cols: any[] = [];

  dialog_visible: boolean = false;
  libro_id: number = -1;

  libroForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    isbn: new FormControl('', [Validators.required]),
    categoriaId: new FormControl<number | null>(null),
    disponible: new FormControl<boolean>(true)
  });

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'titulo', header: 'Título' },
      { field: 'autor', header: 'Autor' },
      { field: 'isbn', header: 'ISBN' },
      { field: 'categoria.nombre', header: 'Categoría' },
      { field: 'disponible', header: 'Estado' }
    ];

    this.getLibros();
    this.getCategorias();
  }

  getLibros() {
    this.libroService.funListar().subscribe({
      next: (res: any) => {
        this.libros = res;
      },
      error: (error: any) => {
        console.error('Error al cargar libros:', error);
      }
    });
  }

  getCategorias() {
    this.categoriaService.funListar().subscribe({
      next: (res: any) => {
        this.categorias = res;
      },
      error: (error: any) => {
        console.error('Error al cargar categorías:', error);
      }
    });
  }

  openNew() {
    this.libro_id = -1;
    this.libroForm.reset({
      titulo: '',
      autor: '',
      isbn: '',
      categoriaId: null,
      disponible: true
    });
    this.dialog_visible = true;
  }

  editLibro(libro: Libro) {
    this.libro_id = libro.id!;
    this.libroForm.setValue({
      titulo: libro.titulo,
      autor: libro.autor,
      isbn: libro.isbn,
      categoriaId: libro.categoria ? libro.categoria.id : (libro.categoriaId || null),
      disponible: libro.disponible !== undefined ? libro.disponible : true
    });
    this.dialog_visible = true;
  }

  guardarLibro() {
    if (this.libroForm.invalid) {
      this.libroForm.markAllAsTouched();
      this.alerta('CAMPOS INCOMPLETOS', 'Por favor llena los campos requeridos.', 'warning');
      return;
    }

    const payload = this.libroForm.value;

    if (this.libro_id > 0) {
      this.libroService.funModificar(this.libro_id, payload).subscribe({
        next: () => {
          this.dialog_visible = false;
          this.getLibros();
          this.libro_id = -1;
          this.alerta('ACTUALIZADO', '¡El libro se modificó con éxito!', 'success');
        },
        error: () => {
          this.alerta('ERROR AL ACTUALIZAR', '¡Verifica los datos del libro!', 'error');
        }
      });
      this.libroForm.reset();
    } else {
      this.libroService.funGuardar(payload).subscribe({
        next: () => {
          this.dialog_visible = false;
          this.getLibros();
          this.alerta('REGISTRADO', '¡El libro se registró con éxito en la biblioteca!', 'success');
        },
        error: () => {
          this.alerta('ERROR AL REGISTRAR', '¡Verifica los datos del libro!', 'error');
        }
      });
      this.libroForm.reset();
    }
  }

  deleteLibro(libro: Libro) {
    Swal.fire({
      title: '¿Está seguro de eliminar este libro?',
      text: `"${libro.titulo}" será eliminado del catálogo de la biblioteca.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.libroService.funEliminar(libro.id!).subscribe({
          next: () => {
            this.alerta('ELIMINADO', 'El libro fue retirado del catálogo.', 'success');
            this.getLibros();
            this.libro_id = -1;
          },
          error: () => {
            this.alerta('ERROR', 'No se pudo eliminar el libro.', 'error');
          }
        });
      }
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  alerta(title: string, text: string, icon: 'success' | 'error' | 'info' | 'warning' | 'question') {
    Swal.fire({ title, text, icon });
  }
}
