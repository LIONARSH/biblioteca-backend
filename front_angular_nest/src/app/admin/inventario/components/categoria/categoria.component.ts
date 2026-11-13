import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';

interface Categoria {
  id?: number;
  nombre: string;
  detalle?: string;
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
    this.categoriaForm.reset();
    this.dialog_visible = true;
  }

  guardarCategoria() {
    this.categoriaService.funGuardar(this.categoriaForm.value).subscribe({
      next: (res: any) => {
        this.dialog_visible = false;
        this.categoriaForm.reset();
        this.getCategorias();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
