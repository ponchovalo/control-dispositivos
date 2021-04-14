import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';



@NgModule({
  declarations: [DashBoardComponent],
  imports: [
    CommonModule,
    NgPrimeModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashBoardModule { }
