import { Component, Input, OnInit } from '@angular/core';
import { RegistroReporte, ReporteExcel } from '../../interfaces/impresora.interface';

@Component({
  selector: 'app-listado-reporte',
  templateUrl: './listado-reporte.component.html',
  styles: [
  ]
})
export class ListadoReporteComponent implements OnInit {

  @Input() registros: RegistroReporte[]

  reportes : ReporteExcel[] = []
  
  constructor(
  ) { }

  ngOnInit(): void {
  }


  hojaExcel(){
    let reporte: ReporteExcel
    for (let i = 0; i< this.registros.length; i++) {

      let reporte: ReporteExcel = {
        idregistro: 0,
        nombreimpresora: "",
        modeloimpresora: "",
        ipimpresora: "",
        contador109: 0,
        contador124: 0,
        contador102: 0,
        vpbyn: 0,
        vpcolor: 0
      }

      reporte.idregistro = this.registros[i].idreporte
      reporte.nombreimpresora = this.registros[i].impresora.nombreimpresora
      reporte.modeloimpresora = this.registros[i].impresora.modeloimpresora
      reporte.ipimpresora = this.registros[i].impresora.ipimpresora
      reporte.contador109 = this.registros[i].contador109
      reporte.contador124 = this.registros[i].contador124
      reporte.contador102 = this.registros[i].contador102
      reporte.vpbyn = this.registros[i].vpbyn
      reporte.vpcolor = this.registros[i].vpcolor

      this.reportes.push(reporte)
     
    }
    console.log(this.reportes)

  }

  exportExcel() {
    this.hojaExcel()
      import("xlsx").then(xlsx => {
          const worksheet = xlsx.utils.json_to_sheet(this.reportes);
          const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, "reporte");
      });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });

    this.reportes = []

  }


}
