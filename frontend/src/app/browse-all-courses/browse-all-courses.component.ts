declare var $: any;
import {Component, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {AuthService} from '../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-browse-all-courses',
    templateUrl: './browse-all-courses.component.html',
    styleUrls: ['./browse-all-courses.component.scss']
})
export class BrowseAllCoursesComponent implements OnInit {

    public allCourses: any;
    public fileName: string;

    addNewCourseForm: FormGroup;


    constructor(public courseService: CourseService, public auth: AuthService, private router: Router) {

    }

    prepareCreateForm() {
        this.addNewCourseForm = new FormGroup({
            courseCode: new FormControl('', [Validators.required, Validators.maxLength(8)]),
            courseName: new FormControl('', Validators.required),
            totalTaHours: new FormControl('', [Validators.pattern('^(\\d+(\\.\\d{0,5})?|\\.?\\d{1,5})$')]),
            totalSections: new FormControl('', [Validators.required, Validators.pattern('^(\\d+(\\.\\d{0,5})?|\\.?\\d{1,5})$')]),
            lecHours: new FormControl('', [Validators.required, Validators.pattern('^(\\d+(\\.\\d{0,5})?|\\.?\\d{1,5})$')]),
            labHours: new FormControl('', [Validators.required, Validators.pattern('^(\\d+(\\.\\d{0,5})?|\\.?\\d{1,5})$')]),
        });
    }


    ngOnInit(): void {
        this.prepareCreateForm();
        this.loadCourses();
    }


    loadCourses = () => this.courseService.getCourses().subscribe(res => {
        this.allCourses = res;

        if (this.auth.isInstructor()) {
            let validCourses = [];
            this.allCourses = this.allCourses.filter(course => {
                course.instructors.forEach(instructor => {
                    if (instructor.email == this.auth.getEmail()) {
                        validCourses.push(course);
                    }
                });
            });
            this.allCourses = validCourses;
        }
    });

    onFileSelected(event) {
        const file: File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append('file', file);
            this.courseService.uploadCourses(formData).subscribe(res => {
                    this.loadCourses();
                },
                (err) => {
                    alert(err.error);
                }
            );
        }
    }

    saveCourse() {
        this.courseService.saveNewCourse(this.addNewCourseForm.value).subscribe(res => {
            let course :any = res;
            if (course.courseCode) {
                $('#add-new-course').modal('hide');
                this.router.navigate(['/courses/' + course.courseCode])
            } else {
                console.log(course);
                alert('Course created!');
            }
        }, err => {
            alert(err.error.msg);
        });
    }
}
