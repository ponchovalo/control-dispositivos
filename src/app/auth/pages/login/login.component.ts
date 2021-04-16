import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interface';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  usuario: Usuario

  constructor( 
    private authService: AuthService, 
    private router: Router,
    private messageService: MessageService
  ) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/dashboard']);
    }
  }

  login(): void{
    console.log(this.usuario)
    if(this.usuario.username.trim() === '' || this.usuario.password.trim() === ''){
      console.log('alerta')
      return
    }
    this.authService.login(this.usuario).subscribe(response => {

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);

      this.mostrarMensaje();

      this.router.navigate(['/dashboard'])
      
    }, err => {
      if(err.status == 400){
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Usuario o Contraseña Incorrectos', life: 3000});
      }
    })
  }

  mostrarMensaje(){
    let usuario = this.authService.usuario
    setTimeout(() => {
      console.log(usuario.username)
      this.messageService.add({severity:'success', summary: 'Éxito', detail: `Bienvenido ${usuario.username} `, life: 3000});
    }, 500);
  }

}
