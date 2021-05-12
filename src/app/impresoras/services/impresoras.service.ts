import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FechaMes, Impresora, Registro, RegistroReporte } from '../interfaces/impresora.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ImpresorasService {
    
    private urlBase: string = "http://localhost:54244/api/impresoras";
    private urlBaseToner: string = "http://localhost:54244/api/controltoner";
    private urlBaseReporte: string = "http://localhost:8080/api/reporteimpresora";
    

    constructor(private http: HttpClient, 
                private router: Router,
                private authService: AuthService
    ) { }



    private isNoAutorizado(e): boolean {
      if(e.status==401 || e.status==403){
        this.router.navigate(['/auth/login'])
        return true
      }
      return false
    }

    getImpresoras(): Observable<Impresora[]>{
        return this.http.get<Impresora[]>(`${this.urlBase}/listar`);
    }

    crear(impresora: Impresora) : Observable<Impresora> {
      return this.http.post<Impresora>(`${this.urlBase}/crear`, impresora);
    }

    getImpresora(id:any): Observable<Impresora>{
      return this.http.get<Impresora>(`${this.urlBase}/mostrar/${id}`);
    }
  
    actualizar(impresora: Impresora): Observable<Impresora>{
      return this.http.put<Impresora>(`${this.urlBase}/actualizar`, impresora )
    }

    deleteImpresora(id:any): Observable<Impresora> {
      return this.http.delete<Impresora>(`${this.urlBase}/eliminar/${id}`)
    }




    getImpresorasControlToner(): Observable<Impresora[]>{
      return this.http.get<Impresora[]>(`${this.urlBase}/listarcambios`);
    }
    crearRegistroToner(registro: Registro) : Observable<Registro> {
      return this.http.post<Registro>(`${this.urlBaseToner}/crear`, registro);
    }
    actualizarRegistroToner(registro: Registro) : Observable<Registro> {
      return this.http.put<Registro>(`${this.urlBaseToner}/actualizar`, registro);
    }
    deleteRegistroToner(id:any): Observable<Registro> {
      return this.http.delete<Registro>(`${this.urlBaseToner}/eliminar/${id}`)
    }
    



    getRegistros(fechames: FechaMes): Observable<RegistroReporte[]>{
      return this.http.get<RegistroReporte[]>(`${this.urlBaseReporte}/${fechames.year}/${fechames.month}`);
    }

    crearReporte(registroReporte: RegistroReporte): Observable<RegistroReporte>{
      return this.http.post<RegistroReporte>(this.urlBaseReporte, registroReporte);
    }



}
