import { Injectable } from '@angular/core';
import { elementoSidebar } from '../interfaces/sidebar.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  ubicacion: string = '';

  elementosSidebar: elementoSidebar[] = [];


  constructor() { }

  tituloSideBar(titulo: string) {

    switch(titulo){
      case "impresoras":
        this.ubicacion = "Impresoras";
        this.elementosSidebar = [
          {
            titulo: "Inventario",
            enlace: "/impresoras/listado"
          },
          {
            titulo: "Control Toner",
            enlace: "/impresoras/control-toner"
          },
          {
            titulo: "Reportes",
            enlace: "/impresoras/reportes"
          }
        ]
        break
      case "dashboard":
        this.ubicacion = "DashBoard";
        this.elementosSidebar = [
          {
            titulo: "Resumen",
            enlace: "/dashboard"
          }
        ]
        break
      default:
        this.ubicacion = "NO";
        break
    }

  }


}
