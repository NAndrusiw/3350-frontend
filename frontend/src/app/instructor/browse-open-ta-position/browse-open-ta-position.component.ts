import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-browse-open-ta-position',
  templateUrl: './browse-open-ta-position.component.html',
  styleUrls: ['./browse-open-ta-position.component.scss']
})
export class BrowseOpenTaPositionComponent implements OnInit {

  public coursesRequiringTa: any;

  constructor(public courseService: CourseService, private auth: AuthService) {

  }

  ngOnInit(): void {

    this.loadCourses();

  }


  loadCourses = () => this.courseService.getCourses().subscribe(res => {
    this.coursesRequiringTa = res;

    let validCourses = [];
    this.coursesRequiringTa = this.coursesRequiringTa.filter(course => {
      course.instructors.forEach(instructor => {
        if (instructor.email == this.auth.getEmail() && course.requiresTa) {
          validCourses.push(course);
        }
      });
    });
    this.coursesRequiringTa = validCourses;
  })

}
