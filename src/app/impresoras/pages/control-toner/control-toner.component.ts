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

  registro: Registro = {
    idcontrol: 0,
    contador109: 0,
    contador124: 0,
    contador102: 0,
    fecha: null,
    idimpresora: 0,
    idusuario: 0,
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
    cambios: []
  };

  dialogo: boolean = false;
  dialogTitle: string = '';
  dialogoTabla: boolean = false;
  dialogEliminar = false;
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

  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


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
      cambios: []
    }
  }

  initRegistro() {
    this.registro = {
      idcontrol: 0,
      contador109: 0,
      contador124: 0,
      contador102: 0,
      fecha: null,
      idimpresora: 0,
      idusuario: 0,
      toner:''
    } 
  }

  listarImpresorasControlToner(){
    this.impresorasService.getImpresorasControlToner().subscribe(
      impresoras => { this.impresoras = impresoras, console.log(impresoras)}
    );
  }

  select(impresora: Impresora){
      this.dialogTitle = 'Agregar Registro a Impresora'
      this.impresora = impresora
      this.submited = true;
      this.registro.idimpresora = impresora.idimpresora
      this.registro.idusuario = this.authService.usuario.id;
      this.registro.fecha = new Date();
      this.dialogo = true;
  }

  cerrarDialogo() {
    this.initRegistro();
    this.initImpresora();
    this.dialogo = false;
  }

  guardarRegistro(){
    if(this.registro.idcontrol == 0){
      let nombre = this.impresora.nombreimpresora
      this.impresorasService.crearRegistroToner(this.registro)
      .subscribe( registro => {
        this.messageService.add({severity:'success', summary: 'Creacion Exitosa', detail: `Se agrego registro a: ${nombre}`, life: 3000});
        this.listarImpresorasControlToner();
      })
      this.cerrarDialogo();
    }else{
      let nombre = this.impresora.nombreimpresora
      this.impresorasService.actualizarRegistroToner(this.registro)
      .subscribe( registro => {
        this.messageService.add({severity:'success', summary: 'Modificacion Exitosa', detail: `Se modifico registro de impresora: ${nombre}`, life: 3000});
        this.listarImpresorasControlToner();
      })
      this.cerrarDialogo();
    }
    
  }

  detallesImpresora(impresora: Impresora){
    this.impresora = impresora
    console.log(impresora)
    this.dialogoTabla = true;
  }

  selectRegistro(registro){
    this.dialogTitle = 'Modificar Registro de Impresora'
    let dat = 0
    this.dialogoTabla = false;
    this.registro = registro;
    this.registro.fecha = new Date(Date.parse(registro.fecha))
    this.dialogo = true;
    console.log(this.registro.fecha)
  }

  confirmar(registro){
    this.registro = registro;
    this.registro.fecha = new Date(Date.parse(registro.fecha))
    this.dialogEliminar = true;
  }

  cerrarDialogoEliminar(){
    this.initRegistro();
    this.dialogEliminar = false;
  }

  borrarRegistro(){
    let id = 0
    this.impresorasService.deleteRegistroToner(this.registro.idcontrol)
    .subscribe( registro => {
      this.messageService.add({severity:'success', summary: 'Se elimino con exito', detail: `Se elimino registro con fecha ${registro.fecha} `, life: 3000});
      id = this.registro.idcontrol
      this.listarImpresorasControlToner();
      this.impresora.cambios = this.impresora.cambios.filter(e => e.idcontrol != id)
      this.cerrarDialogoEliminar();
    })
    console.log('Vas a Eliminar')
  }

}