import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class AppServiceService {

    private OuterDataURL = "http://localhost:8080/OuterData";
    private InnerDataURL= "http://localhost:8080/InnerData";

    constructor(private http: HttpClient) {}

    getOuterData() {
        console.log(this.http.get(this.OuterDataURL));
        return this.http.get(this.OuterDataURL);
    }

    getInnerData() {
        console.log(this.http.get(this.InnerDataURL));
        return this.http.get(this.InnerDataURL);
    }
}