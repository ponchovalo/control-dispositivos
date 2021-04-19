import { Component, Input, OnInit } from '@angular/core';
import { ImpresorasService } from '../../services/impresoras.service';
import { Impresora, RegistroReporte } from './../../interfaces/impresora.interface'

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



  registro: RegistroReporte = null;

  registros: RegistroReporte[] = [];

  impresora: Impresora = null;

  impresoras: Impresora[] = [];

  dialogo: boolean = false;

  @Input() mesSelected: Date;

  constructor(
    private impresorasService: ImpresorasService 
  ) { }

  ngOnInit(): void {
    this.obtenerImpresoras();
  }


  obtenerImpresoras(){
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
            fecha : this.mesSelected
          }
          this.registros.push(registro)
        }
        console.log(this.registros)
      }
    )
  }

  selectRegistro(registro){
    this.registro = registro;
    this.dialogo = true;
  }

  guardarRegistro(){
    this.registro = null;
    this.dialogo = false;
    console.log(this.registros)
  }



  listar(){}

}
