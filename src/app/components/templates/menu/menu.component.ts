import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
    items!: MenuItem[];
    visible: boolean = true;

    @Output()
    eventLogout = new EventEmitter();

    constructor(){}

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-pw pi-home',
                routerLink: 'home'
            },
            {
                label: 'Cadastro',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Clientes', icon: 'pi pi-fw pi-user', routerLink: 'clientes'},
                    {label: 'Produtos', icon: 'pi pi-fw pi-paypal'}
                ]
            },
            {
                label: 'Pedido',
                icon: 'pi pi-fw pi-shopping-cart',
                items: [
                    {
                        label: 'Novo',
                        icon: 'pi pi-pi pi-plus'
                    },
                    {
                        label: 'Anteriores', 
                        icon: 'pi pi-pi pi-check', 
                    }
                ]
            },
            {
                label: 'Relatório',
                icon: 'pi pi-fw pi-file-pdf',
                items: [
                    {
                        label: 'Cliente',
                        icon: 'pi pi-fw pi-user',
                        routerLink: 'relatorios/clientes'
                    },
                    {
                        label: 'Produto',
                        icon: 'pi pi-fw pi-paypal'
                    },
                    {
                        label: 'Pedido',
                        icon: 'pi pi-fw pi-shopping-cart'
                        
                    }
                ]
            },
            {
                label: 'Sair',
                icon: 'pi pi-fw pi-power-off',
                command: ()=>{
                    this.deslogar();
                }
            }
        ];
    }

    deslogar(){
        localStorage.clear();
        this.eventLogout.emit("Deslogar")
    }
}
