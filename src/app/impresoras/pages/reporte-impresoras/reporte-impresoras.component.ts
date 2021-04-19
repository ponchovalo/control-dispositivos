import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-impresoras',
  templateUrl: './reporte-impresoras.component.html',
  styles: [
  ]
})
export class ReporteImpresorasComponent implements OnInit {

  mes: string = "Abril"

  crearVer: boolean = true;

  mesSelected: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

  buscarReporte(){
    this.mesSelected = null;
  }

  generarReporte(){
    this.crearVer = !this.crearVer;
  }

}
