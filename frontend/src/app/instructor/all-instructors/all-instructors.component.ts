import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-all-instructors',
  templateUrl: './all-instructors.component.html',
  styleUrls: ['./all-instructors.component.scss']
})
export class AllInstructorsComponent implements OnInit {

  allInstructors: any;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getAllInstructors();
  }

  getAllInstructors = () => this.userService.getInstructors().subscribe(res => {
    this.allInstructors = res;
  })
}
