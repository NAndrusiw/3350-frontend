import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import * as Feather from 'feather-icons';
import {UserService} from '../services/user.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ResponseService} from '../services/response.service';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, AfterViewInit {

    constructor(public auth: AuthService, private userService: UserService, public http: HttpClient, public responseService: ResponseService) {
    }

    public newAccountDetails: any;
    private dummyAccounts = {
        instructor: {
            email: 'instructor@uwo.ca',
            name: 'James Dean',
            password: 'password',
        },
        faculty: {
            email: 'faculty@uwo.ca',
            name: 'Feather Leaf',
            password: 'password',
        },
        department: {
            email: 'department@uwo.ca',
            name: 'Daisy White',
            password: 'password',
        },

    };

    ngOnInit(): void {

    }

    ngAfterViewInit() {
        Feather.replace();
    }



    seedResponses() {
        let applications = [{ courseCode: "SE3350", courseRanking: "2", taName: "A. Michaels", inTerm: "Yes", priorTAExperience: "Yes", attendUWO: "Yes", hoursAvailable: "20", answers: "1. 1; 2. 2; 3. 3;" },
            { courseCode: "SE3309", courseRanking: 1, taName: "A. Michaels", inTerm: "Yes", priorTAExperience: "Yes", attendUWO: "Yes", hoursAvailable: "20", answers: "1. 2; 2. 3; 3. 4;" },
            { courseCode: "SE3316", courseRanking: 1, taName: "N. Kinney", inTerm: "Yes", priorTAExperience: "Yes", attendUWO: "Yes", hoursAvailable: "20", answers: "1. September" },
            { courseCode: "SE2250", courseRanking: 3, taName: "A. Michaels", inTerm: "Yes", priorTAExperience: "Yes", attendUWO: "Yes", hoursAvailable: "20", answers: "1. Yes" },
            { courseCode: "SE2202", courseRanking: 2, taName: "J. Johnson", inTerm: "No", priorTAExperience: "Yes", attendUWO: "No", hoursAvailable: "12", answers: "1. " },
            { courseCode: "SE3353", courseRanking: 1, taName: "J. Johnson", inTerm: "No", priorTAExperience: "Yes", attendUWO: "No", hoursAvailable: "12", answers: "1. No" },
            { courseCode: "SE3353", courseRanking: 1, taName: "B. Nichols", inTerm: "Yes", priorTAExperience: "Yes", attendUWO: "Yes", hoursAvailable: "15", answers: "1. No" },
            { courseCode: "SE3350", courseRanking: 1, taName: "C. Jacobs", inTerm: "Yes", priorTAExperience: "No", attendUWO: "Yes", hoursAvailable: "20", answers: "1. 1; 2. 2; 3. 3;" },
            { courseCode: "ECE2277", courseRanking: 2, taName: "N. Kinney", inTerm: "Yes", priorTAExperience: "Yes", attendUWO: "Yes", hoursAvailable: "20", answers: "1. Monday; 2. Tuesday" }
        ];

        applications.forEach(item => {
            this.responseService.saveResponse(item).subscribe((data :any) => {
                console.log(data);
                // alert('Seeded!');
            }, (error: HttpErrorResponse) => {
                console.log(error);
                // alert(error.error);
            })
        });

        alert('Success!')
    }

    addUserAccount(role: string) {

        let account = this.dummyAccounts[role];
        account.role = role;

        this.userService.createNewUser(account)
            .subscribe(
                (data: any) => {
                    this.newAccountDetails = account;
                },
                (error: HttpErrorResponse) => {
                    if (error.error.message !== null) {
                        this.newAccountDetails = account;
                        window.alert(error.error.message);
                    } else {
                        window.alert(error.error);
                    }
                }
            );
    }



    seedRandomInstructorAccounts() {

        let users = [
            {
            "name": "Alleyn McCaskill",
            "email": "amccaskill0@uwo.ca"
        }, {
            "name": "Kaile Bradbrook",
            "email": "kbradbrook1@uwo.ca"
        }, {
            "name": "Cordey Leavold",
            "email": "cleavold2@uwo.ca"
        }, {
            "name": "Alistair McCritchie",
            "email": "amccritchie3@uwo.ca"
        }, {
            "name": "Silas Viveash",
            "email": "sviveash4@uwo.ca"
        }, {
            "name": "Chadwick Orton",
            "email": "corton5@uwo.ca"
        }, {
            "name": "Vinni Tinker",
            "email": "vtinker6@uwo.ca"
        }, {
            "name": "Anton Aizkovitch",
            "email": "aaizkovitch7@uwo.ca"
        }, {
            "name": "Rosemaria Wyllt",
            "email": "rwyllt8@uwo.ca"
        }, {
            "name": "August Offener",
            "email": "aoffener9@uwo.ca"
        }, {
            "name": "Evy Horder",
            "email": "ehordera@uwo.ca"
        }, {
            "name": "Gasper Power",
            "email": "gpowerb@uwo.ca"
        }, {
            "name": "Kingsley Lally",
            "email": "klallyc@uwo.ca"
        }, {
            "name": "Sibel Souch",
            "email": "ssouchd@uwo.ca"
        }, {
            "name": "Alida Vogt",
            "email": "avogte@uwo.ca"
        }, {
            "name": "Lainey Sturdey",
            "email": "lsturdeyf@uwo.ca"
        }, {
            "name": "Melisent Drohun",
            "email": "mdrohung@uwo.ca"
        }, {
            "name": "Hersh Drackford",
            "email": "hdrackfordh@uwo.ca"
        }
        ]

        users = users.map(item => {
           return {...item, password: 'password', role: 'instructor'};
        })


    }



    seedEnrolmentData() {
        this.http.get(`${environment.baseURL}demo/seed`).subscribe((data: any) => {
            window.alert(data.message);
        });
    }


}
