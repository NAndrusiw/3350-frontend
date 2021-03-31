import {Component, OnInit} from '@angular/core';
import {EnrollmentService} from '../../services/enrollment.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-import-enrollment-data',
    templateUrl: './import-enrollment-data.component.html',
    styleUrls: ['./import-enrollment-data.component.scss']
})
export class ImportEnrollmentDataComponent implements OnInit {


    public successUpload: boolean;
    public allEnrollments: any;
    public override: boolean;
    taHourFrom: FormGroup;
    taHourInputs: FormArray;

    public fileName;

    constructor(public enrollmentService: EnrollmentService, private formBuilder: FormBuilder) {
    }


    ngOnInit(): void {

        this.initializeForm();

        this.loadEnrollments();

    }

    populateTextboxes(): void {
        this.taHourInputs = this.taHourFrom.get('taHourInputs') as FormArray;
        for (let i = 0; i < this.allEnrollments.length; i++) {
            this.taHourInputs.push(this.formBuilder.group({
                hours: [this.allEnrollments[i].totalTaHours, [Validators.required, Validators.pattern('^(\\d+(\\.\\d{0,5})?|\\.?\\d{1,5})$')]]
            }));

        }
    }

    onFileSelected(event) {

        const file: File = event.target.files[0];
        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append('file', file);
            this.enrollmentService.uploadEnrollment(formData).subscribe(res => {
                this.successUpload = true;
                this.allEnrollments = res;
                this.initializeForm();
                this.populateTextboxes();

            });
        }
    }

    initializeForm() {

        this.taHourFrom = this.formBuilder.group({
            taHourInputs: new FormArray([])
        });


        this.taHourInputs = this.taHourFrom.get('taHourInputs') as FormArray;
        // this.taHourInputs.push(this.formBuilder.group({
        //     hours: ['', Validators.required]
        // }));

    }


    loadEnrollments = () => this.enrollmentService.getEnrollments().subscribe(res => {
        this.allEnrollments = res;
        this.populateTextboxes();
    });

    updateHours() {
        let values = this.taHourFrom.value;
        let hourInputs = values.taHourInputs;

        let enrollments = this.allEnrollments.map((item, index) => {
            let num = parseFloat(hourInputs[index].hours);
            if (!isNaN(num)) {
                item.totalTaHours = num;
            }
            return item;
        });

        this.allEnrollments = enrollments;
        this.enrollmentService.updateCalculateHours(enrollments).subscribe(res => {
            console.log(res);
            this.override = false;
        });


    }

}
