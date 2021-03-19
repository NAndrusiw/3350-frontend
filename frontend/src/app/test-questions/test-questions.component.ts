import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {DataService} from '../services/forms/data.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.scss']
})
export class TestQuestionsComponent implements OnInit {
  testQuestionsForm = new FormGroup({
    courseCode: new FormControl('', Validators.required),
    instructorName: new FormControl('', [Validators.required]),
    questions: new FormControl('', Validators.required),

  });
  formControls = this.testQuestionsForm.controls;

  constructor(public dataService: DataService, private router: Router, private http: HttpClient) { }



  submitQuestionsForm() {

    let questions = this.testQuestionsForm.value;

    let payload = {}

    // alert(1);
    this.dataService.questionsData(questions).subscribe(
      (data: any) => {
        console.log(data);

        this.testQuestionsForm.reset();

        alert('Saved!');
      },
      (err: HttpErrorResponse) => {

        window.alert(err.error)
      }
    );

    // let questions = {
    //   courseCode: questionsData.value.courseCode,
    //   question1: questionsData.value.question1,
    //   question2: questionsData.value.question1,
    //   question3: questionsData.value.question1
    //
    // }

  }
  ngOnInit(): void {
  }

}
