import { Component, OnInit } from '@angular/core';
import { elementoSidebar } from '../interfaces/sidebar.interfaces';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  sidebar: boolean = true;
  elementoSelect: elementoSidebar = {
    titulo: "",
    enlace: ""
  }

  get elementosSidebar(){
    return this.sharedService.elementosSidebar
  }

  get titulo(){
    return this.sharedService.ubicacion
  } 

  constructor(
    private sharedService: SharedService,
    private router: Router
    ) { }
  
  ngOnInit(): void {
  }

  enlazar(elemento: elementoSidebar){
    this.router.navigate([elemento.enlace])
  }

  classRounded(){

  }

}
