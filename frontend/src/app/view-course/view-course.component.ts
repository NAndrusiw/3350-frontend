import {Component, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {DataService} from '../services/forms/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-view-course',
    templateUrl: './view-course.component.html',
    styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {


    editCourseForm: FormGroup;

    // formControls = this.editCourseForm.controls;

    courseId: string;
    course: any;
    requiresTa: boolean;
    openQualificationsForm: boolean = false;
    openTestForm: boolean = false;
    linkInstructorsExpanded: boolean = false;
    currentInstructorQuestionRecord: any;
    showResponses: boolean = false;
    isEditingCourse: boolean;

    courseTas: any;

    constructor(public courseService: CourseService, private route: ActivatedRoute, public auth: AuthService, public dataService: DataService) {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
            this.fetchCourse();
            this.getInstructorQuestions();
        });
    }

    // Prepare the form
    prepareEditForm() {
        this.editCourseForm = new FormGroup({
            courseName: new FormControl(this.course.data.courseName, Validators.required),
            totalTaHours: new FormControl(this.course.data.totalTaHours, [Validators.required, Validators.pattern('^(\\d+(\\.\\d{0,5})?|\\.?\\d{1,5})$')]),
        });
    }

    saveCourse() {
        let courseInfo = this.editCourseForm.value;
        courseInfo.courseCode = this.course.data.courseCode;
        this.courseService.updateCourse(this.courseId, courseInfo).subscribe(res => {
            this.course =res;
            this.requiresTa = this.course.data.requiresTa;
            this.isEditingCourse = false;
        }, error => {
            alert('Sorry, an error occured. Check console for details');
            console.log(error);
        });
    }

    ngOnInit(): void {

    }

    fetchCourse = () => this.courseService.fetchCourse(this.courseId).subscribe(res => {
        this.course = res;
        this.requiresTa = this.course.data.requiresTa;
        this.courseTas = this.course.tas;
        this.prepareEditForm();
    });

    toggleTaRequirement(): void {
        this.requiresTa = !this.requiresTa;
        this.courseService.updateCourse(this.courseId, {
            requiresTa: this.requiresTa
        }).subscribe(res => {
            this.course = res;
            this.requiresTa = this.course.data.requiresTa;
        });
    }


    getComponentColor(component: string) {
        switch (component.toUpperCase()) {
            case 'LEC':
                return 'badge-soft-info';
            case 'LAB':
                return 'badge-soft-warning';
            case 'TUT':
                return 'badge-soft-danger';
        }
        return 'badge-soft-info';
    }

    getInstructorQuestions(): void {
        this.dataService.getQuestions(this.courseId).subscribe(res => {
            let qualifications: any = res;
            let instructorQuestionRecord = qualifications.filter(item => {
                return item.instructor_id === this.auth.getId();
            });
            this.currentInstructorQuestionRecord = instructorQuestionRecord.length > 0 ? instructorQuestionRecord[0] : null;
        });
    }

}
