import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {DataService} from '../services/forms/data.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {
  qualificationsForm = new FormGroup({

    courseCode:new FormControl('', Validators.required),
    requiredTAHours: new FormControl('', Validators.required),
    degree: new FormControl('', [Validators.required, Validators.min(45)]), // check it
    requiredDescription: new FormControl('', Validators.required)
  });
  formControls = this.qualificationsForm.controls;

  constructor(public dataService: DataService, private router: Router, private http: HttpClient) {

  }

  submitQualificationsForm(){

    let qualifications = this.qualificationsForm.value;

    // alert(1);
    this.dataService.qualificationsData(qualifications).subscribe(
      (data: any) => {
        console.log(data);

        this.qualificationsForm.reset();

        alert('Done, but not yet synced to db!');
      },
      (err: HttpErrorResponse) => {

        window.alert(err.error)
      }
    );

    // alert(23);
  }
  ngOnInit(): void {
  }

}
