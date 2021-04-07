import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Impresora } from '../interfaces/impresora.interface';

@Injectable({
  providedIn: 'root'
})
export class ImpresorasService {
    
    private urlBase: string = "http://localhost:8080/api/impresoras";

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    
    constructor(private http: HttpClient) { }

    getImpresoras(): Observable<Impresora[]>{
        return this.http.get<Impresora[]>(this.urlBase);
    }

    crear(impresora: Impresora) : Observable<Impresora> {
      return this.http.post<Impresora>(this.urlBase, impresora, {headers: this.httpHeaders})
    }

    getImpresora(id:any): Observable<Impresora>{
      return this.http.get<Impresora>(`${this.urlBase}/${id}`)
    }
  
    actualizar(impresora: Impresora): Observable<Impresora>{
      return this.http.put<Impresora>(`${this.urlBase}/${impresora.id}`, impresora, {headers: this.httpHeaders} )
    }




}
