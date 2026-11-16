import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseUrl = environment.urlServidor;
  private http = inject(HttpClient);

  funListar() {
    return this.http.get(`${this.baseUrl}/libros`);
  }

  funGuardar(registro: any) {
    return this.http.post(`${this.baseUrl}/libros`, registro);
  }

  funModificar(id: number, registro: any) {
    return this.http.patch(`${this.baseUrl}/libros/${id}`, registro);
  }

  funEliminar(id: number) {
    return this.http.delete(`${this.baseUrl}/libros/${id}`);
  }
}
