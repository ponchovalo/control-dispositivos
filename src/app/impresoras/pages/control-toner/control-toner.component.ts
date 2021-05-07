import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Impresora, Modelo, Registro } from '../../interfaces/impresora.interface';
import { ImpresorasService } from '../../services/impresoras.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';
import { AuthService } from '../../../auth/auth.service';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interface';

@Component({
  selector: 'app-control-toner',
  templateUrl: './control-toner.component.html',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
      height: 800px;
    }

  `],
  providers: [MessageService]
})
export class ControlTonerComponent implements OnInit {

  impresoras: Impresora[] = [];

  registrosImpresora: Registro[] = [];

  registro: Registro = {
    id: 0,
    contador109: 0,
    contador124: 0,
    contador102: 0,
    fecha: null,
    impresora_id: 0,
    usuario: null,
    toner: ''
  }

  impresora: Impresora = {
    idimpresora: 0,
    nombreimpresora: "",
    modeloimpresora: "",
    serieimpresora: "",
    ipimpresora: "",
    macimpresora: "",
    edificioimpresora: "",
    ubicacionimpresora: "",
    registrosimpresora: []
  };

  dialogo: boolean = false;
  dialogTitle: string = '';
  dialogoTabla: boolean = false;
  submited: boolean = false;

  toners: any = [
    {
      name: 'Cartucho 039 Negro'
    },
    {
      name: 'Cartucho 041 Negro'
    },
    {
      name: 'Cartucho GPR-57 Negro'
    },
    {
      name: 'Cartucho GPR-58-Y Amarillo'
    },
    {
      name: 'Cartucho GPR-58-M Magenta'
    },
    {
      name: 'Cartucho GPR-58-C Cyan'
    },
    {
      name:  'Cartucho GPR-58-K Negro'
    }

  ]


  constructor( 
    private impresorasService : ImpresorasService, 
    private messageService: MessageService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.listarImpresorasControlToner();
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
      registrosimpresora: []
    }
  }

  initRegistro() {
    this.registro = {
      id: 0,
      contador109: 0,
      contador124: 0,
      contador102: 0,
      fecha: null,
      impresora_id: 0,
      usuario: null,
      toner:''
    }
  }

  cerrarDialogo() {
    this.initRegistro();
    this.initImpresora();
    this.dialogo = false;
    this.submited = false;
  }


  listarImpresorasControlToner(){
    this.impresorasService.getImpresorasControlToner().subscribe(
      impresoras => { this.impresoras = impresoras, console.log(impresoras)}
    );
  }

  select(objeto: any, tipo: string){
    if(tipo == 'nuevo'){
      this.submited = true;
      this.impresora = objeto
      this.registro.impresora_id = this.impresora.idimpresora
      this.registro.usuario = this.authService.usuario;
      this.registro.fecha = new Date();
      this.dialogo = true;
    }else if(tipo == 'modificar'){
      this.submited = false;
      this.registro = objeto;
      this.registro.fecha = new Date(Date.parse(objeto.fecha))
      console.log(this.registro)
      this.dialogo = true
    }
  }

  guardarRegistro(){
    if(this.submited){
      let nombreImpresora = this.impresora.nombreimpresora;
      this.impresorasService.crearRegistroToner(this.registro)
      .subscribe( registro => {
        this.messageService.add({severity:'success', summary: 'Éxito', detail: `Se agrego registro a:  ${nombreImpresora} `, life: 3000});
        this.listarImpresorasControlToner();
      })
      this.cerrarDialogo();
    }else{
      
    }

  }

  detallesImpresora(impresora: Impresora){
    this.impresorasService.getImpresora(impresora.idimpresora)
    .subscribe( impresora => this.impresora = impresora )
    this.registrosImpresora = impresora.registrosimpresora;
    this.dialogoTabla = true;
  }

  selectRegistro(registro){
    this.registro = registro;
    this.dialogo = true;

  }

}