import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Impresora, Modelo } from '../../interfaces/impresora.interface';
import { ImpresorasService } from '../../services/impresoras.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-listado-impresoras',
  templateUrl: './listado-impresoras.component.html',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
  `],
  providers: [MessageService]
})
export class ListadoImpresorasComponent implements OnInit {

  impresoras: Impresora[] = [];

  impresora: Impresora = {
    id: 0,
      nombre: "",
      modelo: "",
      serie: "",
      ip: "",
      mac: "",
      edificio: "",
      ubicacion: ""
  };

  dialogo: boolean = false;
  submited: boolean = false;

  modelos: Modelo[] = [
    { id: 1,
      nombre: 'ILBP352DN'
    },
    { id: 2,
      nombre: 'MF525DW'
    },
    { id: 3,
      nombre: 'IRA4545I'
    },
    { id: 4,
      nombre: 'C356IF'
    },
    { id: 5,
      nombre: 'IRA4225'
    },
    { id: 6,
      nombre: 'IRAC3330I'
    },
    { id: 7,
      nombre: 'TX-4000'
    }
  ]

  constructor( 
    private impresorasService : ImpresorasService, 
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.listarImpresoras();
  }

  initImpresora() {
      this.impresora = {
      id: 0,
      nombre: "",
      modelo: "",
      serie: "",
      ip: "",
      mac: "",
      edificio: "",
      ubicacion: ""
    }
  };

  abrirNuevo() {
    this.initImpresora();
    this.dialogo = true;
    this.submited = false;
  }

  cerrarDialogo() {
    this.initImpresora();
    this.dialogo = false;
    this.submited = false;
  }


  listarImpresoras(){
    this.impresorasService.getImpresoras().subscribe(
      impresoras => this.impresoras = impresoras
    );
  }

  editarImpresora(impresora: Impresora){
    this.impresorasService.getImpresora(impresora.id)
      .subscribe( impresora => this.impresora = impresora )
    this.dialogo = true;
  }

  guardarImpresora(){
    this.submited = true;

    if(this.impresora.nombre.trim()){
      if(this.impresora.id !== 0){
        this.impresorasService.actualizar(this.impresora)
          .subscribe( impresora => {
            this.messageService.add({severity:'success', summary: 'Éxito', detail: `Impresora ${impresora.nombre} Actualizada Correctamente`, life: 3000});
            this.listarImpresoras();
          })
        
      }else{
        this.impresorasService.crear(this.impresora)
          .subscribe( impresora => {
            this.messageService.add({severity:'success', summary: 'Éxito', detail: `Impresora ${impresora.nombre} Agregada Correctamente`, life: 3000});
            this.listarImpresoras();
          })
      }
      this.cerrarDialogo();
    }


  }




}
