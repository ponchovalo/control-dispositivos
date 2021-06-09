import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ImpresorasService } from '../../services/impresoras.service';
import { FechaMes, Impresora, RegistroReporte } from './../../interfaces/impresora.interface'
import { ReporteM } from '../../interfaces/impresora.interface';

@Component({
  selector: 'app-form-reporte',
  templateUrl: './form-reporte.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
    width: 150px;
    margin: 0 auto 2rem auto;
    display: block;
}
`],
})
export class FormReporteComponent implements OnInit {

  mesBuscar: Date = new Date()

  mensajeGuardado: boolean = false;

  registro: RegistroReporte = null;

  registros: RegistroReporte[] = [];

  impresora: Impresora = null;

  impresoras: Impresora[] = [];

  dialogo: boolean = false;

  fechames: FechaMes = null;

  hayReporte: boolean = false;

  reporteM: ReporteM = null;

  constructor(
    private impresorasService: ImpresorasService,
    private router: Router,
    private messageService: MessageService 
  ) { }

  ngOnInit(): void {
    localStorage.getItem('registrosGuardados')? this.hayReporte = true: this.hayReporte = false
  }

  generarReporte(){
      if(this.mesBuscar == null){
        this.messageService.add({severity:'error', summary: 'Error', detail: `Ingesar Fecha`, life: 3000});
        return
      }
      this.registros = [];
      this.impresorasService.getImpresoras().subscribe(
        impresoras => { this.impresoras = impresoras
          for (let i = 0; i < this.impresoras.length; i++) {
            let registro: RegistroReporte = {
              idreporte : 0,
              contador109 : 0,
              contador124 : 0,
              contador102 : 0,
              impresora : this.impresoras[i],
              vpbyn : 0,
              vpcolor : 0,
              year : this.mesBuscar.getFullYear(),
              month: this.mesBuscar.getMonth() + 1
            }
            this.registros.push(registro)
          }
        }
      )
  }

  cambiarfecha(){
    this.mesBuscar.getFullYear();
    this.mesBuscar.getMonth();
    console.log(this.mesBuscar.getFullYear(), this.mesBuscar.getMonth() + 1)

    for (let i = 0; i < this.registros.length; i++) {
      this.registros[i].year = this.mesBuscar.getFullYear(),
      this.registros[i].month = this.mesBuscar.getMonth() + 1
      
    }
  }

  continuar(){
    this.registros = JSON.parse(localStorage.getItem('registrosGuardados'))
  }

  selectRegistro(registro){
    this.registro = registro;
    this.dialogo = true;
  }

  guardarRegistro(){
    this.registro = null;
    this.dialogo = false;
  }

  guardarReporte(){
    localStorage.setItem('registrosGuardados', JSON.stringify(this.registros));
    this.registros = [];
    this.mensajeGuardado = true;
    this.hayReporte = true;
  }

  cerrarReporte(){
    let error = ""
    this.registros = JSON.parse(localStorage.getItem('registrosGuardados'))
    this.reporteM = {
      nombre: 'reporte',
      registros: this.registros
    }

    this.impresorasService.crearReporte(this.reporteM)
    .subscribe(res => {
      this.messageService.add({severity:'success', summary: 'Exito', detail: 'Reporte Creado Correctamente' , life: 3000});
    }, 
    err => {
      this.messageService.add({severity:'error', summary: err.error.title, detail: 'No hay meses anteriores para realizar el cálculo, Verifique el Mes' , life: 3000});
    });


    this.mensajeGuardado = false;
    this.router.navigate[('/impresoras/reporte')]
  }


  
}
