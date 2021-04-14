import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: [
  ]
})
export class MenuBarComponent implements OnInit {

  items:MenuItem[]; 

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
          label: 'Home',
          routerLink: '/dashboard'
      },
      {
          label: 'Clear Cube',
          routerLink: '/impresoras'
      },
      {
          label: 'Impresoras',
          routerLink: '/impresoras'
      },
      {
          label: 'Login',
          routerLink: '/auth/login'
      }
  ];
  }

}
