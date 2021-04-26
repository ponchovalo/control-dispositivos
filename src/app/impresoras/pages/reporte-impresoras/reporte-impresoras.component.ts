import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, MenuItem } from 'primeng/api';
import { FormReporteComponent } from '../../components/form-reporte/form-reporte.component';

@Component({
  selector: 'app-reporte-impresoras',
  templateUrl: './reporte-impresoras.component.html',
  styles: [
  ]
})
export class ReporteImpresorasComponent implements OnInit {

  buscar: boolean = false;
  crear: boolean = false;

  items: MenuItem[];

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Reporte Mensual',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Buscar...',
            icon: 'pi pi-fw pi-search',
            command: () => {
              this.crear = false;
              this.buscar = true;
            }
          },
          {
            label: 'Crear',
            icon: 'pi pi-fw pi-plus',
            command: () => {
              this.buscar = false;
              this.crear = true;
            }
          }
        ]
      },
      {
        label:'Impresoras',
        items:[
          {
            label: 'Mensual'
          },
          {
            label: 'Consumo Toner'
          },
          {
            label: 'Refacciones'
          }
        ]
      }
    ]
  }


}
