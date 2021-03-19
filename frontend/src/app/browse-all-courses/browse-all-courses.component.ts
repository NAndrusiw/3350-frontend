import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-browse-all-courses',
  templateUrl: './browse-all-courses.component.html',
  styleUrls: ['./browse-all-courses.component.scss']
})
export class BrowseAllCoursesComponent implements OnInit {

  public allCourses: any;

  constructor(public courseService: CourseService) {
    // console.log(this.courseService.getCourses());

  }

  ngOnInit(): void {

    this.loadCourses();
    //

  }


  loadCourses = () => this.courseService.getCourses().subscribe(res => {
    this.allCourses = res;
  })

}
