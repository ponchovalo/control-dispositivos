import { Injectable } from '@angular/core';
import { elementoSidebar } from '../interfaces/sidebar.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  ubicacion: string = '';

  elementosSidebar: elementoSidebar[] = [];


  constructor() { }

  tituloSideBar(path: string) {

    switch(path){
      case "/impresoras":
        this.ubicacion = "Impresoras";
        this.elementosSidebar = [
          {
            titulo: "Inventario",
            enlace: "/impresoras"
          },
          {
            titulo: "Control Toner",
            enlace: "/control-toner"
          },
          {
            titulo: "Reportes",
            enlace: "/reportes"
          }
        ]
        break
      case "/":
        this.ubicacion = "DashBoard";
        this.elementosSidebar = [
          {
            titulo: "Resumen",
            enlace: "/"
          }
        ]
        break
      default:
        this.ubicacion = "NO";
        break
    }

  }


}
