import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {UserService} from '../services/user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-new-instructor-form',
    templateUrl: './new-instructor-form.component.html',
    styleUrls: ['./new-instructor-form.component.scss']
})
export class NewInstructorFormComponent implements OnInit {

    accountCreated: boolean = true;
    name: string;
    token: string;
    url: string;
    uwoEmail: string;

    constructor(public auth: AuthService, public User: UserService) {

    }

    ngOnInit(): void {
        this.accountCreated = false;
    }

    createAccount() {

        this.User.createNewInstructor(this.auth.instructorForm.value)
            .subscribe(
                (data: any) => {
                    this.name = data.name;
                    this.uwoEmail = data.username + '@uwo.ca';
                    this.url = window.location.origin + '/activate-account?token=' + data.token;
                    this.accountCreated = true
                    this.auth.instructorForm.reset();
                },
                (err: HttpErrorResponse) => {
                    console.log(err);
                    window.alert(err.error);
                }
            );

    }
}
