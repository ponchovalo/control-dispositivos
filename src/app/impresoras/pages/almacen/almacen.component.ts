import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html'
})
export class AlmacenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inic: boolean = false;
  opcion: string = "";
  consulta: string = "consulta";
  entradas: string = "entradas";
  salidas: string = "salidas";
  edicion: string = "edicion";

  establecerOpcion(opt: string){
    this.inic = true;
    this.opcion = opt;
    console.log(this.opcion)
  }

}
