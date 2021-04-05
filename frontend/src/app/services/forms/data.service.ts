import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
    }

    qualificationsData(qualifications) {
        return this.http.post(`${environment.baseURL}api/qualificationsForm`, qualifications);
    }

    getQuestions(courseCode) {
        return this.http.get(`${environment.baseURL}api/qualificationsForm/` + courseCode);
    }

    getQualifications() {
        return this.http.get(`${environment.baseURL}api/qualificationsForm`);
    }

    exportQuestionsUrl(): string {
        return `${environment.baseURL}api/export/qualifications`;
    }

    exportQuestionsForCourseUrl($question_id): string {
        return `${environment.baseURL}api/export/qualifications/` + $question_id;
    }


}
