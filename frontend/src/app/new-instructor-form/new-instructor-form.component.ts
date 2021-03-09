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

    constructor(public auth: AuthService, public User: UserService) {

    }

    ngOnInit(): void {
    }

    createAccount() {

        const {name, email, username} = this.auth.instructorForm.value;

        this.User.createNewInstructor(this.auth.instructorForm.value)
            .subscribe(
                (data: any) => {
                    this.accountCreated = true
                    this.name = data.name;
                    this.url = window.location.origin + '/activate-account?token=' + data.token;
                    this.auth.instructorForm.reset();
                },
                (err: HttpErrorResponse) => {
                    console.log(err);
                    window.alert(err.error);
                }
            );

    }
}
