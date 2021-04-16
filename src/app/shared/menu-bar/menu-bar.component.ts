import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: [
  ]
})
export class MenuBarComponent implements OnInit {

  items:MenuItem[]; 

  constructor( private authService: AuthService, private router: Router, private messageService: MessageService ) { }

  logout():void {
    this.authService.logout();

    setTimeout(() => {
      this.messageService.add({severity:'success', summary: 'OK', detail: 'Sesion Cerrada con Exito', life: 3000})
    }, 500);

    this.router.navigate(['/auth/login'])

  }

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
      }
  ];
  }

}
