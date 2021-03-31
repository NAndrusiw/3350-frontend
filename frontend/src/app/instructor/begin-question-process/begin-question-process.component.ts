import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {DataService} from '../../services/forms/data.service';
import {ResponseService} from '../../services/response.service';

@Component({
    selector: 'app-begin-question-process',
    templateUrl: './begin-question-process.component.html',
    styleUrls: ['./begin-question-process.component.scss']
})
export class BeginQuestionProcessComponent implements OnInit {

    instructorQuestionsForm: FormGroup;
    // items: FormArray;
    questions: FormArray;
    currentStep = 0;
    @Input() courseCode : string;

    qualifications: any;
    alreadyCreated = false;
    allResponses: any;
    instructorQuestionRecord: any;

    constructor( private formBuilder: FormBuilder, public auth: AuthService, public dataService: DataService, public responseService: ResponseService) {
        // this.questions = new Array(4);
    }

    get t() { return this.instructorQuestionsForm.controls.questions as FormArray; }


    ngOnInit(): void {
        this.instructorQuestionsForm = this.formBuilder.group({
            requiredTAHours: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
            degree: new FormControl('', [Validators.required, Validators.min(45)]), // check it
            requiredDescription: new FormControl('', Validators.required),
            questions: new FormArray([])
        });

        this.getTa();
        this.loadResponses();
        this.addItem();
    }



    addItem(): void {
        this.questions = this.instructorQuestionsForm.get('questions') as FormArray;
        this.questions.push(this.formBuilder.group({
            question: ['', Validators.required]
        }));
    }

    removeLastItem() : void {
        this.questions = this.instructorQuestionsForm.get('questions') as FormArray;
        this.questions.removeAt(-1);
        // this.addItem();
    }

    submitForm() {
        let qualifications = this.instructorQuestionsForm.value;
        // qualifications.
        qualifications.instructorEmail = this.auth.getEmail();
        qualifications.courseCode = this.courseCode;

        this.dataService.qualificationsData(qualifications).subscribe(
            (data: any) => {
                console.log(data);

                this.instructorQuestionsForm.reset();

               this.currentStep = 3;
            },
            (err: HttpErrorResponse) => {
                window.alert(err.error)
                this.currentStep = 3;
            }
        );
    }

    getTa() {
        this.dataService.getQuestions(this.courseCode).subscribe(res => {
            this.qualifications = res;

            let instructorQuestionRecord = this.qualifications.filter(item => {
                return item.instructor_id === this.auth.getId();
            });

            this.alreadyCreated = instructorQuestionRecord.length > 0

            if (this.alreadyCreated) {
                this.instructorQuestionRecord = instructorQuestionRecord;
                this.currentStep = 3;
            } else {
                this.currentStep = 1;
            }
        })
    }

    loadResponses = () => this.responseService.getResponses().subscribe(res => {
        this.allResponses = res;
        this.allResponses = this.allResponses.filter(item => {
            return item.courseCode === this.courseCode;
        });

        if (this.allResponses.length > 0) {
            return this.currentStep = 4;
        }
        // this.allApplicants = this.allResponses.filter((v,i,a)=>a.findIndex(t=>(t.taName === v.taName))===i)
    });

    // addQuestion() {
    //     this.questions.push();
    // }

}
