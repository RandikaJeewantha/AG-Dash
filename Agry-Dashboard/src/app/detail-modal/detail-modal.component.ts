import { Component, OnInit, Input } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: '.app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {
  
  innerData: any;
  plantData: any;
  essentialplantData: any;

  @Input() fullDetails : any;
  
  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.reloadingData();
  }

  reloadingData() {
    this.innerData = this.service.getInnerData().subscribe(data => {
      this.innerData = data;
    });

    this.plantData = this.service.getPlantData().subscribe(data => {
      this.plantData = data;
    });

    this.essentialplantData = this.service.getEssentialPlantData().subscribe(data => {
      this.essentialplantData = data;
    });

  }
  
}