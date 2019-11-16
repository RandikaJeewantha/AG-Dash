import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { InnerData } from '../app-innerData';

@Component({
  selector: '.app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {

  innerData: any;

  constructor(private service: AppServiceService, private router: Router) {
    console.log(this.innerData);
  }

  ngOnInit() {
    this.reloadingData();
  }

  reloadingData() {
    this.innerData = this.service.getInnerData();
  }

}