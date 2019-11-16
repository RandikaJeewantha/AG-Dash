import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InnerData } from './app-innerData';

@Injectable({
    providedIn: "root"
})

export class AppServiceService {

    private OuterDataURL = "http://localhost:8080/OuterData";
    private InnerDataURL= "http://localhost:8080/InnerData";

    constructor(private http: HttpClient) {}

    getOuterData(): Observable<InnerData[]> {
      return this.http.get<InnerData[]>("${this.OuterDataURL}");
    }

    getInnerData(): Observable<InnerData[]> {
        return this.http.get<InnerData[]>("${this.InnerDataURL}");
    }
}