import { Component, Input, OnInit } from '@angular/core';
import { RegistroReporte, ModeloResumen } from '../../interfaces/impresora.interface';

@Component({
  selector: 'app-resumen-reporte',
  templateUrl: './resumen-reporte.component.html',
  styles: [
  ]
})
export class ResumenReporteComponent implements OnInit {

  basicData: any;
    
  basicOptions: any;

  data: ModeloResumen[] = []

  @Input() registros: RegistroReporte[]

  modelosILBP352DN: RegistroReporte[]
  modelosMF525DW: RegistroReporte[]
  modelosIRA4545I: RegistroReporte[]
  modelosC356IF: RegistroReporte[]

  constructor() {}

  ngOnInit(): void {
    this.filtrar()
    this.construirData()
    this.basicData = {
        labels: ['ILBP352DN Blanco y Negro', 'MF525DW Blanco y Negro', 'IRA4545I Blanco y Negro', 'C356IF Blanco y Negro', 'C356IF Color'],
        datasets: [
            {
                label: 'Volumen por Contrato',
                backgroundColor: '#7BA9D7',
                data: [10714, 57659, 214476, 15696, 26788]
            },
            {
                label: 'Volumen Procesado',
                backgroundColor: '#7763BA',
                data: [this.data[0].volumProByN, this.data[1].volumProByN, this.data[2].volumProByN, this.data[3].volumProByN, this.data[3].volumProColor]
            }
        ]
    };
    this.basicOptions = {
        legend: {
            labels: {
                fontColor: '#ebedef'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: '#ebedef'
                },
                gridLines: {
                    color: 'rgba(255,255,255,0.2)'
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: '#ebedef'
                },
                gridLines: {
                    color: 'rgba(255,255,255,0.2)'
                }
            }]
        }
    };
    
  }

  filtrar(){
    this.modelosILBP352DN = this.registros.filter(reg => reg.impresora.modelo == 'ILBP352DN')
    this.modelosMF525DW = this.registros.filter(reg => reg.impresora.modelo == 'MF525DW')
    this.modelosIRA4545I = this.registros.filter(reg => reg.impresora.modelo == 'IRA4545I')
    this.modelosC356IF = this.registros.filter(reg => reg.impresora.modelo == 'C356IF')
  }

  construirData(){
    this.data = [
      {
        name: this.modelosILBP352DN[0].impresora.modelo,
        registros: this.modelosILBP352DN,
        volumProByN: this.volumenProcesadoBYN(this.modelosILBP352DN),
        volumProColor: this.volumenProcesadoColor(this.modelosILBP352DN),
        volumExcedenteByN:  this.volumenExcedenteByN(this.modelosILBP352DN, 10714),
        volumExcedenteColor: this.volumenExcedenteColor(this.modelosILBP352DN, 0),
        volumenXContratoByN: 10714,
        volumenXContratoColor: 0,
        precioExcedenteByN: 0.1578,
        precioExcedenteColor: 0,
        importeExcedenteByN: this.importeByN(this.modelosILBP352DN, 10714, 0.1578),
        importeExcedenteColor: this.importeByN(this.modelosILBP352DN, 0, 0) ,
        impresorasInstaladas: this.modelosILBP352DN.filter(reg => reg.impresora.ip != 'STOCK').length,
        impresorasStock: this.modelosILBP352DN.filter(reg => reg.impresora.ip == 'STOCK').length,
        ImpresorasTotal: this.modelosILBP352DN.length
      },
      {
        name: this.modelosMF525DW[0].impresora.modelo,
        registros: this.modelosMF525DW,
        volumProByN: this.volumenProcesadoBYN(this.modelosMF525DW),
        volumProColor: this.volumenProcesadoColor(this.modelosMF525DW),
        volumExcedenteByN:  this.volumenExcedenteByN(this.modelosMF525DW, 57659),
        volumExcedenteColor: this.volumenExcedenteColor(this.modelosMF525DW, 0),
        volumenXContratoByN: 57659,
        volumenXContratoColor: 0,
        precioExcedenteByN: 0.216,
        precioExcedenteColor: 0,
        importeExcedenteByN: this.importeByN(this.modelosMF525DW, 57659, 0.216),
        importeExcedenteColor: this.importeByN(this.modelosMF525DW, 0, 0) ,
        impresorasInstaladas: this.modelosMF525DW.filter(reg => reg.impresora.ip != 'STOCK').length,
        impresorasStock: this.modelosMF525DW.filter(reg => reg.impresora.ip == 'STOCK').length,
        ImpresorasTotal: this.modelosMF525DW.length
      },
      {
        name: this.modelosIRA4545I[0].impresora.modelo,
        registros: this.modelosIRA4545I,
        volumProByN: this.volumenProcesadoBYN(this.modelosIRA4545I),
        volumProColor: this.volumenProcesadoColor(this.modelosIRA4545I),
        volumExcedenteByN:  this.volumenExcedenteByN(this.modelosIRA4545I, 214476),
        volumExcedenteColor: this.volumenExcedenteColor(this.modelosIRA4545I, 0),
        volumenXContratoByN: 214476,
        volumenXContratoColor: 0,
        precioExcedenteByN: 0.1303,
        precioExcedenteColor: 0,
        importeExcedenteByN: this.importeByN(this.modelosIRA4545I, 214476, 0.1303),
        importeExcedenteColor: this.importeByN(this.modelosIRA4545I, 0, 0) ,
        impresorasInstaladas: this.modelosIRA4545I.filter(reg => reg.impresora.ip != 'STOCK').length,
        impresorasStock: this.modelosIRA4545I.filter(reg => reg.impresora.ip == 'STOCK').length,
        ImpresorasTotal: this.modelosIRA4545I.length
      },
      {
        name: this.modelosC356IF[0].impresora.modelo,
        registros: this.modelosC356IF,
        volumProByN: this.volumenProcesadoBYN(this.modelosC356IF),
        volumProColor: this.volumenProcesadoColor(this.modelosC356IF),
        volumExcedenteByN:  this.volumenExcedenteByN(this.modelosC356IF, 15696),
        volumExcedenteColor: this.volumenExcedenteColor(this.modelosC356IF, 26788),
        volumenXContratoByN: 15696,
        volumenXContratoColor: 26788,
        precioExcedenteByN: 0.3231,
        precioExcedenteColor: 1.3357,
        importeExcedenteByN: this.importeByN(this.modelosC356IF, 15696, 0.3231),
        importeExcedenteColor: this.importeColor(this.modelosC356IF, 26788, 1.3357) ,
        impresorasInstaladas: this.modelosC356IF.filter(reg => reg.impresora.ip != 'STOCK').length,
        impresorasStock: this.modelosC356IF.filter(reg => reg.impresora.ip == 'STOCK').length,
        ImpresorasTotal: this.modelosC356IF.length
      }
    ]
  }

  volumenProcesadoBYN(modelos: RegistroReporte[]): number{
    let totalbyn: number = 0;
    for (let i = 0; i < modelos.length; i++) {
      totalbyn = totalbyn + modelos[i].vpbyn
    }
    return totalbyn;
  }
  volumenProcesadoColor(modelos: RegistroReporte[]): number{
    let totalcolor: number = 0;
    for (let i = 0; i < modelos.length; i++) {
      totalcolor = totalcolor + modelos[i].vpcolor
    }
    return totalcolor;
  }
  volumenExcedenteByN(modelos: RegistroReporte[], volCont: number): number{
    return this.volumenProcesadoBYN(modelos) - volCont
  }
  volumenExcedenteColor(modelos: RegistroReporte[], volCont: number): number{
    return this.volumenProcesadoColor(modelos) - volCont
  }
  importeByN(modelos: RegistroReporte[], volCont: number, precio: number){
    return this.volumenExcedenteByN(modelos, volCont) * precio
  }
  importeColor(modelos: RegistroReporte[], volCont: number, precio: number){
    return this.volumenExcedenteColor(modelos, volCont) * precio
  }
  impresorasInstaladas(modelos: RegistroReporte[]): number{
    return modelos.filter(reg => reg.impresora.ip != 'STOCK').length
  }
  impresorasStock(modelos: RegistroReporte[]): number{
    return modelos.filter(reg => reg.impresora.ip == 'STOCK').length
  }

}
