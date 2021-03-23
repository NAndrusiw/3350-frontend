import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {

  courseId: string;
  course: any;
  requiresTa: boolean;
  openQualificationsForm: boolean = false;
  openTestForm: boolean = false;
  linkInstructorsExpanded: boolean = false;

  constructor(public courseService: CourseService, private route: ActivatedRoute, public auth: AuthService) {
    this.route.params.subscribe(params=> {
      this.courseId = params.courseId;
      this.fetchCourse();
    })
  }

  ngOnInit(): void {

  }

  fetchCourse = () => this.courseService.fetchCourse(this.courseId).subscribe(res => {
    this.course = res;
    this.requiresTa = this.course.data.requiresTa;
  })

  toggleTaRequirement(): void {
    this.requiresTa = !this.requiresTa;
    this.courseService.updateCourse(this.courseId, {
      requiresTa: this.requiresTa
    }).subscribe(res => {
      this.course = res;
      this.requiresTa = this.course.data.requiresTa;
    })
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
    return 'badge-soft-info'
  }

}
