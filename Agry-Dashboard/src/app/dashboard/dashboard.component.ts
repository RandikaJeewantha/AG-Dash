import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  innerData: any;
  outerData: any;
  plantData: any;
  essentialplantData: any;
  listDetails: any;
  fullDetails: any;

  constructor(private service: AppServiceService, private router: Router) { }

  ngOnInit() {
    this.reloadingData();
  }

  reloadingData() {
    this.innerData = this.service.getInnerData().subscribe(data => {
      this.innerData = data;
      console.log("innerData", this.innerData);
    });

    this.outerData = this.service.getOuterData().subscribe(data => {
      this.outerData = data;
      console.log("outerData : ", this.outerData);
    });

    this.plantData = this.service.getPlantData().subscribe(data => {
      this.plantData = data;
      console.log("PlantData :", this.plantData);
    });

    this.essentialplantData = this.service.getEssentialPlantData().subscribe(data => {
      this.essentialplantData = data;
      console.log("essentialplantData : ", this.essentialplantData);
    });

  }

  Categories() {
    this.listDetails = ["Categories", "Tomato"];
  }

  Plants() {
    this.listDetails = ["Plants", "Tomato-01"];
  }

  Indicaters() {
    this.listDetails = ["Indicaters", "PH", "Height", " Relative Humidity", "Temperature", "Light", "Electric Conductivity"];
  }

  FullDetails(id) {
    this.fullDetails = id;
  }

}