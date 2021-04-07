import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styles: [
  ]
})
export class DashBoardComponent implements OnInit {

  constructor(
    private router:Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.tituloSideBar(this.router.url);
  }

}
