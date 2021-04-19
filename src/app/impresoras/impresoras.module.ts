import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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



@NgModule({
  declarations: [
    ListadoImpresorasComponent,
    ReporteImpresorasComponent,
    ControlTonerComponent,
    HomeImpresorasComponent,
    ListadoReporteComponent,
    ResumenReporteComponent,
    FormReporteComponent
  ],
  imports: [
    CommonModule,
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
