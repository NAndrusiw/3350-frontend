import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http: HttpClient) {

  }

  uploadEnrollment(payload) {
    return this.http.post(`${environment.baseURL}api/enrollment`, payload);
  }

  updateCalculateHours(payload) {
    return this.http.patch(`${environment.baseURL}api/enrollment`, payload);
  }

  getEnrollments() {
    return this.http.get(`${environment.baseURL}api/enrollment`);
  }

}
