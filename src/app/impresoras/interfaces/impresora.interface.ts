import { Usuario } from "src/app/usuarios/interfaces/usuario.interface";

export interface Impresora {
    idimpresora?: number;
    nombreimpresora?:string;
    modeloimpresora?: string,
    serieimpresora?: string,
    ipimpresora?: string,
    macimpresora?: string,
    edificioimpresora?: string,
    ubicacionimpresora?: string
    registrosimpresora?: Registro[];
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

export interface ModeloResumen {
    name: string,
    registros: RegistroReporte[],
    volumProByN: number,
    volumProColor: number,
    volumExcedenteByN: number,
    volumExcedenteColor: number,
    volumenXContratoByN: number,
    volumenXContratoColor: number,
    precioExcedenteByN: number,
    precioExcedenteColor: number,
    importeExcedenteByN: number,
    importeExcedenteColor: number,
    impresorasInstaladas: number,
    impresorasStock: number,
    ImpresorasTotal: number
}