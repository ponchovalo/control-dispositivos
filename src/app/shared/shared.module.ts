import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { SidebarComponent } from './sidebar/sidebar.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuBarComponent,
    SidebarComponent
  ],
  exports:[
    MenuBarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    FormsModule
  ]
})
export class SharedModule { }
