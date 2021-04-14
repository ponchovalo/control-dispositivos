import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-home-impresoras',
  templateUrl: './home-impresoras.component.html',
  styles: [
  ]
})
export class HomeImpresorasComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.tituloSideBar('impresoras')
  }

}
