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
    cambios?: Registro[];
}

export interface Modelo {
    id: number,
    nombre: string
}

export interface Registro {
    idcontrol?: number;
    contador109?: number;
    contador124?: number;
    contador102?: number;
    idimpresora?: number;
    idusuario: number;
    toner?: string;
    fecha?: Date;
}

export interface RegistroReporte {
    idreporte: number;
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

export interface ReporteExcel {
    idregistro?: number,
    nombreimpresora?: string,
    modeloimpresora?: string,
    ipimpresora?: string,
    contador109?: number;
    contador124?: number;
    contador102?: number;
    vpbyn?: number;
    vpcolor?: number;
}

export interface ReporteM {
    nombre?: string,
    registros?: RegistroReporte[]
}

export interface RegistroReporteM {
    idreporte: number;
    contador109: number;
    contador124: number;
    contador102: number;
    impresora: number;
    vpbyn: number;
    vpcolor: number;
    year: number;
    month: number;
}

export interface Partida{
    id: number;
    noparte: string;
    paramodelo: string;
    categoria: string;
    vidautil: string;
    cantidad: number;
}