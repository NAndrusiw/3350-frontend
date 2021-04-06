import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../services/course.service';

@Component({
    selector: 'app-link-applicant-to-course',
    templateUrl: './link-applicant-to-course.component.html',
    styleUrls: ['./link-applicant-to-course.component.scss']
})
export class LinkApplicantToCourseComponent implements OnInit {

    @Input() courseCode: string;
    @Output() courseAddedEvent = new EventEmitter<string>();


    linkApplicantForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        hoursAvailable: new FormControl('', [Validators.required, Validators.pattern('^(\\d+(\\.\\d{0,5})?|\\.?\\d{1,5})$')]),
        status: new FormControl('', [Validators.required, Validators.pattern('^(\\d+(\\.\\d{0,5})?|\\.?\\d{1,5})$')]),
    });

    constructor(public courseService: CourseService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.courseService.linkApplicantToCourse(this.courseCode, this.linkApplicantForm.value).subscribe(res => {
            this.linkApplicantForm.reset();
            this.courseAddedEvent.emit('');
        }, err => {
            alert(err.error.msg);
        });
    }

}
