import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoImpresorasComponent } from './pages/listado-impresoras/listado-impresoras.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';



@NgModule({
  declarations: [
    ListadoImpresorasComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule
  ]
})
export class ImpresorasModule { }
