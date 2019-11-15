import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class Services {

    private OuterDataURL = "http://localhost:8080/OuterData";
    private InnerDataURL= "http://localhost:8080/InnerData";

    constructor(private http: HttpClient) {}

    getOuterData(): Observable<any> {
        return this.http.get("${this.OuterDataURL}");
    }

    InnerData(): Observable<any> {
        return this.http.get("${this.InnerDataURL}");
    }
}