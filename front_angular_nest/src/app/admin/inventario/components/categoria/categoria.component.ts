import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import Swal from 'sweetalert2';

interface Categoria {
  id?: number;
  nombre: string;
  detalle: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {

  private categoriaService = inject(CategoriaService);

  categorias: Categoria[] = [];
  dialog_visible: boolean = false;
  categoria_id: number = -1;

  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    detalle: new FormControl('')
  });

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.funListar().subscribe({
      next: (res: any) => {
        this.categorias = res;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  mostrarDialog() {
    this.categoria_id = -1;
    this.categoriaForm.reset();
    this.dialog_visible = true;
  }

  editarCategoria(cat: Categoria) {
    this.dialog_visible = true;
    this.categoria_id = cat.id!;
    this.categoriaForm.setValue({
      nombre: cat.nombre,
      detalle: cat.detalle || ''
    });
  }

  guardarCategoria() {
    if (this.categoria_id > 0) {
      this.categoriaService.funModificar(this.categoria_id, this.categoriaForm.value).subscribe({
        next: (res: any) => {
          this.dialog_visible = false;
          this.getCategorias();
          this.categoria_id = -1;
          this.alerta('ACTUALIZADO', '¡La categoría se modificó con éxito!', 'success');
        },
        error: (error: any) => {
          this.alerta('ERROR AL ACTUALIZAR', '¡Verifica los datos!', 'error');
        }
      });
      this.categoriaForm.reset();
    } else {
      this.categoriaService.funGuardar(this.categoriaForm.value).subscribe({
        next: (res: any) => {
          this.dialog_visible = false;
          this.getCategorias();
          this.alerta('REGISTRADO', '¡La categoría se creó con éxito!', 'success');
        },
        error: (error: any) => {
          this.alerta('ERROR AL REGISTRAR', '¡Verifica los datos!', 'error');
        }
      });
      this.categoriaForm.reset();
    }
  }

  eliminarCategoria(cat: Categoria) {
    Swal.fire({
      title: '¿Está seguro de eliminar la categoría?',
      text: '¡Una vez eliminado no se podrá recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.funEliminar(cat.id!).subscribe({
          next: (res: any) => {
            this.alerta('ELIMINADO!', 'Categoría eliminada.', 'success');
            this.getCategorias();
            this.categoria_id = -1;
          },
          error: (error: any) => {
            this.alerta('ERROR!', 'Error al intentar eliminar.', 'error');
          }
        });
      }
    });
  }

  alerta(title: string, text: string, icon: 'success' | 'error' | 'info' | 'question') {
    Swal.fire({ title, text, icon });
  }
}
