import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SharedService } from '../../../shared/services/shared.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styles: [
  ]
})
export class DashBoardComponent implements OnInit {


  constructor(
    private sharedService: SharedService,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.sharedService.tituloSideBar('dashboard');
  }



}
