import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-browse-open-ta-position',
  templateUrl: './browse-open-ta-position.component.html',
  styleUrls: ['./browse-open-ta-position.component.scss']
})
export class BrowseOpenTaPositionComponent implements OnInit {

  public coursesRequiringTa: any;

  constructor(public courseService: CourseService) {

  }

  ngOnInit(): void {

    this.loadCourses();

  }


  loadCourses = () => this.courseService.getCourses().subscribe(res => {
    this.coursesRequiringTa = res;
    this.coursesRequiringTa  = this.coursesRequiringTa.filter(item => {
      return item.requiresTa === true
    })
  })

}
