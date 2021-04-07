export interface Impresora {
    id: number;
    nombre:string;
    modelo: string,
    serie: string,
    ip: string,
    mac: string,
    edificio: string,
    ubicacion: string
}

export interface Modelo {
    id: number,
    nombre: string
}