import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient) {

    }

    getCourses() {
        return this.http.get(`${environment.baseURL}courses`);
    }

    fetchCourse(id) {
        return this.http.get(`${environment.baseURL}courses/${id}`);
    }

    updateCourse(id, payload) {
        return this.http.patch(`${environment.baseURL}courses/${id}`, payload);
    }
  uploadCourses(payload) {
        return this.http.post(`${environment.baseURL}courses/`, payload);
    }

    addInstructorToCourse(courseCode, _instructorId) {
        return this.http.patch(`${environment.baseURL}courses/${courseCode}/instructor/${_instructorId}`, {});
    }

    removeInstructorFromCourse(courseCode, _instructorId) {
        return this.http.delete(`${environment.baseURL}courses/${courseCode}/instructor/${_instructorId}`);
    }
}
