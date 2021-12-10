import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // fetching data from api endpoint
  fetchData():Observable<Object>{
    return this.http.get('https://test-api-67j2d.ondigitalocean.app/angularTest')
  }
}
