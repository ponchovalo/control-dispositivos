import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ImpresorasService } from '../../services/impresoras.service';
import { FechaMes, Impresora, RegistroReporte } from './../../interfaces/impresora.interface'

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
              id : 0,
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
    this.registros = JSON.parse(localStorage.getItem('registrosGuardados'))
    this.listar();
    this.mensajeGuardado = false;
    this.router.navigate[('/impresoras/reporte')]
  }


  listar(){
    this.fechames = {
      year: this.registros[1].year,
      month: this.registros[1].month - 1
    }
    let registrosObtenidos: RegistroReporte[] = [];
    this.impresorasService.getRegistros(this.fechames)
      .subscribe(res => {registrosObtenidos = res
        console.log(res)
        for (let i = 0; i < this.registros.length; i++) {
          this.registros[i].vpbyn = this.registros[i].contador109 - registrosObtenidos[i].contador109
          this.registros[i].vpcolor = this.registros[i].contador124 - registrosObtenidos[i].contador124
        }

        for (let i = 0; i < this.registros.length; i++) {
          this.impresorasService.crearReporte(this.registros[i])
            .subscribe(res => console.log("ok"))
          
        }

        localStorage.removeItem('registrosGuardados');
        this.registros = [];
        this.hayReporte = false;

      });

  }


}
