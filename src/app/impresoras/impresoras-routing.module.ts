import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeImpresorasComponent } from './pages/home-impresoras/home-impresoras.component';
import { ListadoImpresorasComponent } from './pages/listado-impresoras/listado-impresoras.component';
import { ControlTonerComponent } from './pages/control-toner/control-toner.component';
import { ReporteImpresorasComponent } from './pages/reporte-impresoras/reporte-impresoras.component';

const routes: Routes = [
  {
    path:'',
    component: HomeImpresorasComponent,
    children: [
      {
        path: 'listado',
        component: ListadoImpresorasComponent
      },
      {
        path: 'control-toner',
        component: ControlTonerComponent
      },
      {
        path: 'reporte',
        component: ReporteImpresorasComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
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
export class ImpresorasRoutingModule { }
