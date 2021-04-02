import {Component, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';

@Component({
    selector: 'app-browse-all-courses',
    templateUrl: './browse-all-courses.component.html',
    styleUrls: ['./browse-all-courses.component.scss']
})
export class BrowseAllCoursesComponent implements OnInit {

    public allCourses: any;
    public fileName: string;

    constructor(public courseService: CourseService) {

    }

    ngOnInit(): void {
        this.loadCourses();
    }


    loadCourses = () => this.courseService.getCourses().subscribe(res => {
        this.allCourses = res;
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
}
