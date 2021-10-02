import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { FormsModule } from '@angular/forms';
import { ListadoImpresorasComponent } from './pages/listado-impresoras/listado-impresoras.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { MessageService } from 'primeng/api';
import { ReporteImpresorasComponent } from './pages/reporte-impresoras/reporte-impresoras.component';
import { ControlTonerComponent } from './pages/control-toner/control-toner.component';
import { HomeImpresorasComponent } from './pages/home-impresoras/home-impresoras.component';
import { ImpresorasRoutingModule } from './impresoras-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListadoReporteComponent } from './components/listado-reporte/listado-reporte.component';
import { ResumenReporteComponent } from './components/resumen-reporte/resumen-reporte.component';
import { FormReporteComponent } from './components/form-reporte/form-reporte.component';
import { BuscarReporteComponent } from './components/buscar-reporte/buscar-reporte.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { AlmacenConsultaComponent } from './components/almacen-consulta/almacen-consulta.component';
import { AlmacenSalidasComponent } from './components/almacen-salidas/almacen-salidas.component';
import { AlmacenEntradasComponent } from './components/almacen-entradas/almacen-entradas.component';
import { AlmacenEdicionComponent } from './components/almacen-edicion/almacen-edicion.component';



@NgModule({
  declarations: [
    ListadoImpresorasComponent,
    ReporteImpresorasComponent,
    ControlTonerComponent,
    HomeImpresorasComponent,
    ListadoReporteComponent,
    ResumenReporteComponent,
    FormReporteComponent,
    BuscarReporteComponent,
    AlmacenComponent,
    AlmacenConsultaComponent,
    AlmacenSalidasComponent,
    AlmacenEntradasComponent,
    AlmacenEdicionComponent

  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    NgPrimeModule,
    SharedModule,
    ImpresorasRoutingModule

  ],
  providers:[
    MessageService
  ]
})
export class ImpresorasModule { }
