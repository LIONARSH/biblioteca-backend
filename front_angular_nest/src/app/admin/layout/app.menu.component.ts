import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administración',
                items: [
                    { label: 'Admin', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Categoria', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/categoria'] },
                    { label: 'Libros', icon: 'pi pi-fw pi-book', routerLink: ['/admin/libro'] },
                    { label: 'Producto', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/producto'] }
                ]
            },
            {
                label: 'Pedidos',
                items: [
                    { label: 'Lista Préstamos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/prestamo'], badge: 'NEW' },
                    { label: 'Lista Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido'], badge: 'NEW' },
                    { label: 'Nuevo Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/admin/cliente'] },
                    { label: 'Lectores / Persona', icon: 'pi pi-fw pi-user-plus', routerLink: ['/admin/persona'] }
                ]
            },
            {
                label: 'Roles y Usuario',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/admin/usuarios'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' }
                ]
            }
        ];
    }
}
