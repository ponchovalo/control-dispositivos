import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormReporteComponent } from '../../components/form-reporte/form-reporte.component';

@Component({
  selector: 'app-reporte-impresoras',
  templateUrl: './reporte-impresoras.component.html',
  styles: [
  ]
})
export class ReporteImpresorasComponent implements OnInit {


  opcion: string = '';

  reporte: boolean = false;

  mesSelected: Date = new Date();

  buscar: boolean = false;


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

  constructor(
    private messageService: MessageService
  ) { }

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
    if(this.mesSelected == null){
      this.messageService.add({severity:'error', summary: 'Error', detail: `Ingesar Fecha`, life: 3000});
      return
    }
    this.buscar = false
    setTimeout(() => {
      this.buscar = true
    }, 300);
    this.reporte = false;
  }

  cambioMes(){
    this.buscar = false;
  }




}
