import {Component, Input, OnInit} from '@angular/core';
import List from 'list.js';
import {CourseService} from '../../services/course.service';
declare var $: any;


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
   @Input() courses: any;

   @Input() showManageCourse: boolean = true;
   @Input() showAssignToInstructor: boolean = true;

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(function() {
    let options = {
      valueNames: [
        'course',
        'totalSections',
        'instructors',
        'hours',
      ],
      page: 3,
      pagination: true


    }
    new List('courses', options);
      // alert(23);
    }, 1000);
  }


}
