import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../usuarios/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _usuario: Usuario;
  private _token: string;

  constructor(
    private http: HttpClient
  ) { }

  public get usuario(): Usuario {
    if(this._usuario != null){
      return this._usuario
    }else if(this._usuario == null && sessionStorage.getItem('usuario') != null){
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario
    }
    return new Usuario()
    
  }

  public get token(): string {
    if(this._token != null){
      return this._token
    }else if(this._token == null && sessionStorage.getItem('token') != null){
      this._token = sessionStorage.getItem('token')
      return this._token
    }
    return null;
    
  }


  login(usuario: Usuario): Observable<any>{

    const urlEndpoint = 'http://localhost:54244/api/usuarios/login';

    return this.http.post<any>(urlEndpoint, {user: usuario.username, password: usuario.password})
  }


  guardarUsuario(accessToken: string): void{
    let payload = this.obtenerDatosToken(accessToken);
    console.log(payload)
    this._usuario = new Usuario();
    this._usuario.username = payload.nombre;
    this._usuario.nombre = payload.nombre;
    this._usuario.id = payload.idusuario;
    this._usuario.puesto = payload.puesto;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  guardarToken(accessToken: string): void{
    this._token = accessToken;
    sessionStorage.setItem('token', this._token);
  }

  obtenerDatosToken(accessToken: string):any {
    if(accessToken != null ){
      let payload = JSON.parse(atob(accessToken.split(".")[1]));
      return payload
    }
    return null;
  }

  isAuthenticated(): boolean{
    let payload = this.obtenerDatosToken(this.token);
    if(payload != null && payload.nombre && payload.nombre.length > 0){
      return true
    }
    return false
  }

  logout():void{
    this._token = null;
    this._usuario = null;
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('token');
    
    
  }
}
