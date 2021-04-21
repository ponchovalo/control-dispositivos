import { Component, Input, OnInit } from '@angular/core';
import { FechaMes, RegistroReporte, Impresora } from '../../interfaces/impresora.interface';
import { ImpresorasService } from '../../services/impresoras.service';

@Component({
  selector: 'app-listado-reporte',
  templateUrl: './listado-reporte.component.html',
  styles: [
  ]
})
export class ListadoReporteComponent implements OnInit {

  @Input() mesSelected: Date
  registros: RegistroReporte[] = []
  fechaMes: FechaMes = {
    year: 0,
    month: 0
  }
  

  constructor(
    private impresoraService: ImpresorasService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.fechaMes = {
      year: this.mesSelected.getUTCFullYear(),
      month: this.mesSelected.getMonth() + 1
    }
    this.impresoraService.getRegistros(this.fechaMes)
    .subscribe(res => this.registros = res)
  }

}
