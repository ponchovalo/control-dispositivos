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
    
    private urlBase: string = "http://localhost:8080/api/impresoras";
    private urlBaseToner: string = "http://localhost:8080/api/controltoner";
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
        return this.http.get<Impresora[]>(this.urlBase);
    }

    crear(impresora: Impresora) : Observable<Impresora> {
      return this.http.post<Impresora>(this.urlBase, impresora);
    }

    getImpresora(id:any): Observable<Impresora>{
      return this.http.get<Impresora>(`${this.urlBase}/${id}`);
    }
  
    actualizar(impresora: Impresora): Observable<Impresora>{
      return this.http.put<Impresora>(`${this.urlBase}/${impresora.id}`, impresora )
    }

    crearRegistroToner(registro: Registro) : Observable<Registro> {
      console.log(registro)
      return this.http.post<Registro>(this.urlBaseToner, registro);
    }

    getRegistros(fechames: FechaMes): Observable<RegistroReporte[]>{
      console.log(fechames.year + ' '+fechames.month)
      return this.http.get<RegistroReporte[]>(`${this.urlBaseReporte}/${fechames.year}/${fechames.month}`);
    }




}
