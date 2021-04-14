import { NgModule } from '@angular/core';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'resumen',
        component:DashBoardComponent
      },
      {
        path: '**',
        redirectTo:'resumen'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardRoutingModule { }
