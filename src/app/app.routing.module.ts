import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashBoardComponent } from './dash-board/pages/dash-board/dash-board.component';
import { ControlTonerComponent } from "./impresoras/pages/control-toner/control-toner.component";
import { ListadoImpresorasComponent } from "./impresoras/pages/listado-impresoras/listado-impresoras.component";
import { ReporteImpresorasComponent } from "./impresoras/pages/reporte-impresoras/reporte-impresoras.component";
import { LoginComponent } from "./usuarios/pages/login/login.component";

const routes: Routes = [
    {
        path: '',
        component: DashBoardComponent,
        pathMatch: 'full'
    },
    {
        path: 'impresoras',
        component: ListadoImpresorasComponent,
    },
    {
        path: 'control-toner',
        component: ControlTonerComponent,
    },
    {
        path: 'reportes',
        component: ReporteImpresorasComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
]



@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {


}