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
    return this.http.post(`${environment.baseURL}api/testQuestionsForm`, questions);
  }

  qualificationsData(qualifications)
  {
    return this.http.post(`${environment.baseURL}api/qualificationsForm`, qualifications);
  }

  getQuestions(courseCode) {
    return this.http.get(`${environment.baseURL}api/qualificationsForm/` + courseCode);
  }

   getQualifications() {
    return this.http.get(`${environment.baseURL}api/qualificationsForm`);
  }



}
