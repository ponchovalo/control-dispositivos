import { Component, OnInit } from '@angular/core';
import { Impresora } from '../../interfaces/impresora.interface';

@Component({
  selector: 'app-listado-impresoras',
  templateUrl: './listado-impresoras.component.html',
  styles: [
  ]
})
export class ListadoImpresorasComponent implements OnInit {

  impresoras: Impresora[] = [
    {
      id: 1,
      nombre: 'Informatica',
      modelo: 'C56IF',
      serie: '2QC07011',
      ip: '10.222.17.240',
      mac: '0000.0000.0000',
      edificio: 'Edificio de Gobierno',
      ubicacion: 'Informatica'
    },
    {
      id: 2,
      nombre: 'Direccion General',
      modelo: 'C56IF',
      serie: '2QC07011',
      ip: '10.222.17.241',
      mac: '0000.0000.0000',
      edificio: 'Edificio de Gobierno',
      ubicacion: 'Direccion General'
    },
  ];

  impresora: Impresora;

  constructor() { }

  ngOnInit(): void {
  }

}
