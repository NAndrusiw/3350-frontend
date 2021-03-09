import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import * as Feather from 'feather-icons';
import {UserService} from '../services/user.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, AfterViewInit {

    constructor(public auth: AuthService, private userService: UserService, public http: HttpClient) {
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

    seedEnrolmentData() {
        this.http.get(`${environment.baseURL}demo/seed`).subscribe((data: any) => {
            window.alert(data.message);
        });
    }


}
