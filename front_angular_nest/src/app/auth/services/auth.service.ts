import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.urlServidor;
  private http = inject(HttpClient);

  constructor() {}

  loginConNest(credenciales: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credenciales);
  }

  registroConNest(datos: any) {
    return this.http.post<any>(`${this.baseUrl}/usuarios`, datos);
  }
}
