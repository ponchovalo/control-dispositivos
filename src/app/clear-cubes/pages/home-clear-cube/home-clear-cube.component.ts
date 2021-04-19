import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home-clear-cube',
  templateUrl: './home-clear-cube.component.html',
  styles: [
  ]
})
export class HomeClearCubeComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.tituloSideBar('clearcubes')
  }

}
