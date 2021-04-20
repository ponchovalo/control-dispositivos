import { Usuario } from "src/app/usuarios/interfaces/usuario.interface";

export interface Impresora {
    id: number;
    nombre:string;
    modelo: string,
    serie: string,
    ip: string,
    mac: string,
    edificio: string,
    ubicacion: string
    registros: Registro[];
}

export interface Modelo {
    id: number,
    nombre: string
}

export interface Registro {
    id: number;
    contador109: number;
    contador124: number;
    contador102: number;
    impresora_id: number;
    usuario: Usuario;
    toner: string;
    fecha: Date;
}

export interface RegistroReporte {
    id: number;
    contador109: number;
    contador124: number;
    contador102: number;
    impresora: Impresora;
    vpbyn: number;
    vpcolor: number;
    year: number;
    month: number;
}

export interface FechaMes {
    year: number;
    month: number;
}