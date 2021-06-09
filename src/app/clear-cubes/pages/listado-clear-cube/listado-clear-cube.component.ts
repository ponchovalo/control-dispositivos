import { Component, OnInit } from '@angular/core';
import { Cube } from '../../interfaces/clearcube.interface';

@Component({
  selector: 'app-listado-clear-cube',
  templateUrl: './listado-clear-cube.component.html',
  styles: [
  ]
})
export class ListadoClearCubeComponent implements OnInit {

  cubos: Cube[]

  constructor() { }

  ngOnInit(): void {
  }

}
