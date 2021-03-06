import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) {}

  questionsData(questions)
  {
    return this.http.post(`${environment.baseURL}questions`, questions);
  }

  qualificationsData(qualifications)
  {
    return this.http.post(`${environment.baseURL}qualifications`, qualifications);
  }

}
