import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FechaMes, RegistroReporte } from '../../interfaces/impresora.interface';
import { ImpresorasService } from '../../services/impresoras.service';

@Component({
  selector: 'app-buscar-reporte',
  templateUrl: './buscar-reporte.component.html'
})
export class BuscarReporteComponent implements OnInit {

  registros: RegistroReporte[] = []

  mesBuscar: Date = null
  fecha: FechaMes = {
    year: 0,
    month: 0
  }
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  aviso: boolean = false;

  constructor(
    private messageService: MessageService,
    private impresoraService: ImpresorasService
  ) { }

  ngOnInit(): void {
    
  }

  buscar(){
    if( this.mesBuscar == null){
      this.messageService.add({severity:'error', summary: 'Error', detail: `Fecha Vacia`, life: 3000});
      return
    }
    this.registros = [];

    this.fecha = {
      year: this.mesBuscar.getFullYear(),
      month: this.mesBuscar.getMonth() + 1
    }

    this.impresoraService.getRegistros(this.fecha).subscribe(res => {this.registros = res})
    .add(() => {
      console.log(this.registros)
      if(this.registros.length == 0){
        this.messageService.add({severity:'warn', summary: 'Aviso', detail: `No hay reportes de ${this.meses[this.mesBuscar.getMonth() + 1]} del ${this.mesBuscar.getFullYear()}`, life: 3000});
        this.aviso = true;
      }else{
        this.aviso = false;
      }
      
    })
  }
   initRegs(){
     this.registros = []
   }


}
