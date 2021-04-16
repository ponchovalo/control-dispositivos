import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NgPrimeModule
  ]
})
export class AuthModule { }
