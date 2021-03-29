import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ImpresorasModule } from './impresoras/impresoras.module';
import { SharedModule } from './shared/shared.module';
import { DashBoardModule } from './dash-board/dash-board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ImpresorasModule,
    DashBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
