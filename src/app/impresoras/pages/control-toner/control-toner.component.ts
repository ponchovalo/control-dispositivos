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
    id: 0,
    nombre: "",
    modelo: "",
    serie: "",
    ip: "",
    mac: "",
    edificio: "",
    ubicacion: "",
    registros: []
  };

  dialogo: boolean = false;
  submited: boolean = false;


  constructor( 
    private impresorasService : ImpresorasService, 
    private messageService: MessageService,
    private authService: AuthService
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
      ubicacion: "",
      registros: []
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
    this.registrosImpresora = [];
    this.initRegistro();
    this.initImpresora();
    this.dialogo = false;
    this.submited = false;
  }


  listarImpresoras(){
    this.impresorasService.getImpresoras().subscribe(
      impresoras => { this.impresoras = impresoras}
    );
  }

  selectImpresora(impresora: Impresora){
    this.registro.impresora_id = impresora.id;
    this.registro.usuario = this.authService.usuario;
    this.registro.fecha = new Date();
    console.log(this.registro.usuario)
    this.impresorasService.getImpresora(impresora.id)
      .subscribe( impresora => this.impresora = impresora )
    this.dialogo = true;
  }

  guardarRegistro(){
    this.submited = true; 
    let nombreImpresora = this.impresora.nombre;
    console.log(this.registro)
    this.impresorasService.crearRegistroToner(this.registro)
    .subscribe( registro => {
      this.messageService.add({severity:'success', summary: 'Éxito', detail: `Se agrego registro a:  ${nombreImpresora} `, life: 3000});
      this.listarImpresoras();
    })
    this.cerrarDialogo();
    }

  detallesImpresora(impresora: Impresora){
    this.impresorasService.getImpresora(impresora.id)
    .subscribe( impresora => this.impresora = impresora )

    this.registrosImpresora = impresora.registros;
    console.log(this.registrosImpresora)

  }

}