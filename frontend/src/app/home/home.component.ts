import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // experience1: string;
  // experience2: string;
  // experience3: string;
  // degree: any;





  constructor(public auth: AuthService) {
    // this.experience1 = '';
    // this.experience2 = '';
    // this.experience3 = '';
    // this.degree = '';
  }


  ngOnInit(): void {
  }

}
