import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ResponseService {

    constructor(private http: HttpClient) {

    }

    getUploadUrl(): string {
        return `${environment.baseURL}api/response`;
    }

    getResponses() {
        return this.http.get(`${environment.baseURL}api/response`);
    }

    /**
     * @deprecated
     * @param payload
     */
    saveResponse(payload) {
        return this.http.post(`${environment.baseURL}api/response`, payload);
    }

    uploadResponse(payload) {
        return this.http.post(`${environment.baseURL}api/response`, payload);
    }

    saveRankings(payload) {
        return this.http.post(`${environment.baseURL}api/rankings`, payload);
    }

    getInstructorRankings() {
        return this.http.get(`${environment.baseURL}api/rankings`);
    }

    getFinalRank() {
        return this.http.get(`${environment.baseURL}api/rankAll`);
    }
}
