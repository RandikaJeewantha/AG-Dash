import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class AppServiceService {

    private OuterDataURL = "http://localhost:8080/OuterData";
    private InnerDataURL = "http://localhost:8080/InnerData";
    private PlantDataURL = "http://localhost:8080/PlantData";
    private EssentialPlantDataURL = "http://localhost:8080/EssentialPlantData";

    constructor(private http: HttpClient) {}

    getOuterData() {
        return this.http.get(this.OuterDataURL);
    }

    getInnerData() {
        return this.http.get(this.InnerDataURL);
    }

    getPlantData() {
        return this.http.get(this.PlantDataURL);
    }

    getEssentialPlantData() {
        return this.http.get(this.EssentialPlantDataURL);
    }
}