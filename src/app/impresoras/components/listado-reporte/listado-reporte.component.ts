import { Component, Input, OnInit } from '@angular/core';
import { RegistroReporte } from '../../interfaces/impresora.interface';

@Component({
  selector: 'app-listado-reporte',
  templateUrl: './listado-reporte.component.html',
  styles: [
  ]
})
export class ListadoReporteComponent implements OnInit {

  @Input() registros: RegistroReporte[]
  
  constructor(
  ) { }

  ngOnInit(): void {
  }


}
