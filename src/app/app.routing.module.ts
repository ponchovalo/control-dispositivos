import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/guards/auth.guard";
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
    {
        path: 'impresoras',
        loadChildren: () => import('./impresoras/impresoras.module').then(m => m.ImpresorasModule),
        canActivate:[AuthGuard]
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule),
        canActivate:[AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '404',
        component: ErrorPageComponent,
        canActivate:[AuthGuard]
    },
    {
        path: '**',
        redirectTo: '404'
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