import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `,
})
export class AppMenu implements OnInit {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }]
            },
            {
                label: 'Modules',
                items: [
                   { label: 'Admin', icon: 'pi pi-fw pi-cog', routerLink: ['/admin'] },
                   { label: 'Reports', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/reports'] },
                   { label: 'HR (React)', icon: 'pi pi-fw pi-users', routerLink: ['/hr'] },
                   { label: 'Finance (React)', icon: 'pi pi-fw pi-money-bill', routerLink: ['/finance'] }
                ]
            }
        ];
    }
}
