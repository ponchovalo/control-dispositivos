import { Component, OnInit, ViewChild } from '@angular/core';
import { FormReporteComponent } from '../../components/form-reporte/form-reporte.component';

@Component({
  selector: 'app-reporte-impresoras',
  templateUrl: './reporte-impresoras.component.html',
  styles: [
  ]
})
export class ReporteImpresorasComponent implements OnInit {

  mes: string = "Abril"

  opcion: string = '';

  reporte: boolean = false;

  mesSelected: Date = new Date();

  @ViewChild(FormReporteComponent) formReporte: FormReporteComponent;
  generaReporte(){
    this.reporte = true;
    setTimeout(() => {
      this.formReporte.generarReporte('generar')
    }, 500);
  }
  continuaReporte(){
    this.reporte = true;
    setTimeout(() => {
      this.formReporte.generarReporte('continuar')
    }, 500);
  }

  constructor() { }

  ngOnInit(): void {
  }

  hayRegistrosGuardados(){
    if(localStorage.getItem('registrosGuardados')){
      return true;
    }else{
      return false;
    }
  }

  buscarReporte(){
    this.reporte = false;
    this.mesSelected = null;
  }



}
