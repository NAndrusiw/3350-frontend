import {Component, Input, OnInit} from '@angular/core';
import List from 'list.js';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
   @Input() courses: any;

  constructor() { }

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
