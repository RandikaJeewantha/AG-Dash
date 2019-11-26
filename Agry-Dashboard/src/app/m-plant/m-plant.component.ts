import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-m-plant',
  templateUrl: './m-plant.component.html',
  styleUrls: ['./m-plant.component.css']
})
export class MPlantComponent implements OnInit {

  categories = ["Tomato"];
  essentialplantData: any;
  plantCategory: any;

  constructor(private service: AppServiceService) {
    this.essentialplantData = "";
  }

  ngOnInit() { }

  category(plantCategory: any) {

    this.plantCategory = plantCategory

    if (this.plantCategory == "Tomato") {
      this.essentialplantData = this.service.getEssentialPlantData().subscribe(data => {
        this.essentialplantData = data;
      });
    }

    else {
      this.essentialplantData = "";
    }
  }

}
