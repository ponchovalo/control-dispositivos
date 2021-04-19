import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClearCubeComponent } from './pages/home-clear-cube/home-clear-cube.component';
import { ListadoClearCubeComponent } from './pages/listado-clear-cube/listado-clear-cube.component';

const routes: Routes =[
  {
    path:'',
    component: HomeClearCubeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoClearCubeComponent
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
export class ClearCubeRoutingModule { }
