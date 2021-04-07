import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListadoImpresorasComponent } from './pages/listado-impresoras/listado-impresoras.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { MessageService } from 'primeng/api';
import { ReporteImpresorasComponent } from './pages/reporte-impresoras/reporte-impresoras.component';
import { ControlTonerComponent } from './pages/control-toner/control-toner.component';



@NgModule({
  declarations: [
    ListadoImpresorasComponent,
    ReporteImpresorasComponent,
    ControlTonerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgPrimeModule
  ],
  providers:[
    MessageService
  ]
})
export class ImpresorasModule { }
