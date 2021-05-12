import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Impresora, Modelo } from '../../interfaces/impresora.interface';
import { ImpresorasService } from '../../services/impresoras.service';

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
    idimpresora: 0,
    nombreimpresora: "",
    modeloimpresora: "",
    serieimpresora: "",
    ipimpresora: "",
    macimpresora: "",
    edificioimpresora: "",
    ubicacionimpresora: "",
    cambios: []
  };

  dialogo: boolean = false;
  dialogoBorrar: boolean = false;
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
      idimpresora: 0,
      nombreimpresora: "",
      modeloimpresora: "",
      serieimpresora: "",
      ipimpresora: "",
      macimpresora: "",
      edificioimpresora: "",
      ubicacionimpresora: "",
      cambios: []
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
      impresoras => { this.impresoras = impresoras}
    );
  }

  editarImpresora(impresora: Impresora){
    this.impresorasService.getImpresora(impresora.idimpresora)
      .subscribe( impresora => this.impresora = impresora )
    this.dialogo = true;
  }

  guardarImpresora(){
    this.submited = true;

    if(this.impresora.nombreimpresora.trim()){
      if(this.impresora.idimpresora !== 0){
        this.impresorasService.actualizar(this.impresora)
          .subscribe( impresora => {
            this.messageService.add({severity:'success', summary: 'Éxito', detail: `Impresora ${impresora.nombreimpresora} Actualizada Correctamente`, life: 3000});
            this.listarImpresoras();
          })
        
      }else{
        this.impresorasService.crear(this.impresora)
          .subscribe( impresora => {
            this.messageService.add({severity:'success', summary: 'Éxito', detail: `Impresora ${impresora.nombreimpresora} Agregada Correctamente`, life: 3000});
            this.listarImpresoras();
          })
      }
      this.cerrarDialogo();
    }
  }

  confirmacionImpresora(impresora: Impresora){
    this.impresora = impresora;
    this.dialogoBorrar = true;
    console.log('borrar impresora'+impresora.nombreimpresora)
  }

  cerrarDialogoBorrar(){
    this.dialogoBorrar = false;
    this.initImpresora();
  }

  borrarImpresora(){
    this.impresorasService.deleteImpresora(this.impresora.idimpresora)
    .subscribe( impresora => {
      this.messageService.add({severity:'success', summary: 'Éxito', detail: `Impresora ${impresora.nombreimpresora} Eliminada Correctamente`, life: 3000});
      this.cerrarDialogoBorrar();
      this.listarImpresoras();
    })
  }




}
