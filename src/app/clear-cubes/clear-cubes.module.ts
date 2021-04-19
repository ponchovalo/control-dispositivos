import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoClearCubeComponent } from './pages/listado-clear-cube/listado-clear-cube.component';
import { HomeClearCubeComponent } from './pages/home-clear-cube/home-clear-cube.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { ClearCubeRoutingModule } from './clear-cube-routing.module';



@NgModule({
  declarations: [
    ListadoClearCubeComponent, 
    HomeClearCubeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgPrimeModule,
    SharedModule,
    ClearCubeRoutingModule
  ],
  providers:[
    
  ]
})
export class ClearCubesModule { }
