import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {UserService} from '../services/user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    formControls = this.auth.loginForm.controls;


    constructor(public User: UserService, public auth: AuthService, private router: Router) {

    }

    ngOnInit(): void {
        // this
    }


    // Sign in with email/password
    login() {
        const {email, password} = this.auth.loginForm.value;

        this.User.userLogin(this.auth.loginForm.value)
            .subscribe(
            (data: any) => {
                console.log(data);
                let token = data.accessToken;
                localStorage.setItem('Token', token);
                localStorage.setItem('User', JSON.stringify(data));

                this.router.navigate([ '/' ]);
                this.auth.loginForm.reset();
            },
            (err: HttpErrorResponse) => {
                // console.log(err);
                window.alert('Invalid credentials provided!')
            }
        );
    }

}
