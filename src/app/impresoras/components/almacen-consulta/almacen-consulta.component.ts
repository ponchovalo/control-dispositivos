import { Component, OnInit } from '@angular/core';
import { Partida } from '../../interfaces/impresora.interface';
import { ImpresorasService } from '../../services/impresoras.service';

@Component({
  selector: 'app-almacen-consulta',
  templateUrl: './almacen-consulta.component.html'
})
export class AlmacenConsultaComponent implements OnInit {

  constructor(
    private impresorasService: ImpresorasService
  ) { }

  ngOnInit(): void {
    this.listarPartidas();
  }

  partidas: Partida[] = [];

  partida: Partida = null;

  listarPartidas(){
    this.impresorasService.getPartidas().subscribe(
      partidas => { this.partidas = partidas, console.log(this.partidas)}
    );
  }

}
