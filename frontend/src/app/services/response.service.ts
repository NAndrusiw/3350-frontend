import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) {

  }

  getResponses() {
    return this.http.get(`${environment.baseURL}api/response`);
  }

  saveResponse(payload) {
    return this.http.post(`${environment.baseURL}api/response`, payload);
  }

}
