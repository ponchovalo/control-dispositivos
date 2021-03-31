import { Component, OnInit } from '@angular/core';
import { Impresora } from '../../interfaces/impresora.interface';

@Component({
  selector: 'app-listado-impresoras',
  templateUrl: './listado-impresoras.component.html',
  styles: [
  ]
})
export class ListadoImpresorasComponent implements OnInit {

  impresoras: Impresora[] = [];

  impresora: Impresora;

  constructor() { }

  ngOnInit(): void {
  }

}
