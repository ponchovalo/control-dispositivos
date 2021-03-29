import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashBoardComponent } from './dash-board/pages/dash-board/dash-board.component';
import { ListadoImpresorasComponent } from "./impresoras/pages/listado-impresoras/listado-impresoras.component";

const routes: Routes = [
    {
        path: '',
        component: DashBoardComponent,
        pathMatch: 'full'
    },
    {
        path: 'impresoras',
        component: ListadoImpresorasComponent,
        pathMatch: 'full'
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