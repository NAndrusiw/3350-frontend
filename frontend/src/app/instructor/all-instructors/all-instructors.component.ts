import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {CourseService} from '../../services/course.service';
import {Output, EventEmitter} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../services/auth/auth.service';


declare var $: any;

@Component({
    selector: 'app-all-instructors',
    templateUrl: './all-instructors.component.html',
    styleUrls: ['./all-instructors.component.scss']
})
export class AllInstructorsComponent implements OnInit {

    public allCourses: any;
    public allInstructors: any;
    @Input() filteredInstructors: any;
    @Output() linkUpdatedEvent = new EventEmitter<string>();
    @Input() selectedCourse: any;
    @Input() isBeingEdited: boolean;




    constructor(public userService: UserService, public courseService: CourseService, public auth: AuthService) {

    }

    ngOnInit(): void {
        this.getAllInstructors();
        this.loadCourses();
    }

    getAllInstructors = () => this.userService.getInstructors().subscribe(res => {
        this.allInstructors = res;
        // if we don't already have filtered instructors
        if (!this.filteredInstructors) {
            this.filteredInstructors = this.allInstructors;
        }
    });


    loadCourses = () => this.courseService.getCourses().subscribe(res => {
        this.allCourses = res;
    });


    open() {
        $('#exampleModal').modal('show');
    }

    courseCanBeAssigned(instructor) {

        let filtered = this.selectedCourse?.instructors.filter(item => {
            return item._id === instructor._id;
        });

       return filtered.length === 0;

    }

    addInstructorToCourse(instructor) {
        this.courseService.addInstructorToCourse(this.selectedCourse.courseCode, instructor._id).subscribe((data :any) => {
            console.log(data);
            this.linkUpdatedEvent.emit('')
        }, (error: HttpErrorResponse) => {
            console.log(error);
            this.linkUpdatedEvent.emit('')
        })

    }

    removeInstructorFromCourse(instructor) {
        this.courseService.removeInstructorFromCourse(this.selectedCourse.courseCode, instructor._id).subscribe((data :any) => {
            console.log(data);
            this.linkUpdatedEvent.emit('')
        }, (error: HttpErrorResponse) => {
            console.log(error);
            this.linkUpdatedEvent.emit('')
        })

    }
}
