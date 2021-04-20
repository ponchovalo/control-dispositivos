import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  mensajeGuardado: boolean = false;

  registro: RegistroReporte = null;

  registros: RegistroReporte[] = [];

  impresora: Impresora = null;

  impresoras: Impresora[] = [];

  dialogo: boolean = false;

  fechames: FechaMes = null;

  @Input() mesSelected: Date;
  @Input() opcion: string;

  constructor(
    private impresorasService: ImpresorasService,
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  generarReporte(opcion: string){
    this.mensajeGuardado = false;
    if(opcion == 'generar'){
      this.registros = [];
      this.impresorasService.getImpresoras().subscribe(
        impresoras => { this.impresoras = impresoras
          for (let i = 0; i < this.impresoras.length; i++) {
            let registro: RegistroReporte = {
              id : i + 1,
              contador109 : 0,
              contador124 : 0,
              contador102 : 0,
              impresora : this.impresoras[i],
              vpbyn : 0,
              vpcolor : 0,
              year : this.mesSelected.getFullYear(),
              month: this.mesSelected.getMonth() + 1
            }
            this.registros.push(registro)
          }
          console.log(this.registros)
        }
      )
    }else if(opcion == 'continuar'){
      if(localStorage.getItem('registrosGuardados')){
        this.registros = JSON.parse(localStorage.getItem('registrosGuardados'))
        console.log(this.registros)
      }
    }

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
    this.mensajeGuardado = true;
    localStorage.setItem('registrosGuardados', JSON.stringify(this.registros));
  }

  cerrarReporte(){
    localStorage.removeItem('registrosGuardados')
    this.registros = [];
    this.mensajeGuardado = false;
    this.listar();
    this.router.navigate[('/impresoras/reporte')]
  }

  listar(){
    console.log(this.mesSelected.getMonth())
    this.fechames = {
      year: this.mesSelected.getFullYear(),
      month: this.mesSelected.getMonth()
    }
    let registrosObtenidos: RegistroReporte[] = [];
    this.impresorasService.getRegistros(this.fechames)
      .subscribe(res => console.log(res));

  }

}
