import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {CourseService} from '../services/course.service';

@Component({
    selector: 'app-instructor-dashboard',
    templateUrl: './instructor-dashboard.component.html',
    styleUrls: ['./instructor-dashboard.component.scss']
})
export class InstructorDashboardComponent implements OnInit {
    @Input() auth: AuthService;

    public coursesRequiringTa: any;

    constructor(public courseService: CourseService) {
        // console.log(this.courseService.getCourses());

    }

    ngOnInit(): void {

    }


}
