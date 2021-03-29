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
        separator:true
      },
      {
          label: 'Home'
          
      },
      {
          label: 'Impresoras'
      }
  ];
  }

}
