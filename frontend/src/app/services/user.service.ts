import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {}


    createNewUser(payload) {
        return this.http.post(`${environment.baseURL}signup`, payload);
    }

    createNewInstructor(payload) {
        return this.http.post(`${environment.baseURL}signup-instructor`, payload);
    }

    userLogin(payload) {
        return this.http.post(`${environment.baseURL}login`, payload);
    }


    getProtectedData() {
        return this.http.get(`${environment.baseURL}user/data`);
    }
}
