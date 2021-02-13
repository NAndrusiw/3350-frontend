import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {UserService} from '../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';

// import {AuthService} from '../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // formControls = new FormGroup({
    //     email: new FormControl('', [Validators.required, Validators.email]),
    //     password: new FormControl('', Validators.required)
    // });

    formControls = this.auth.loginForm.controls;


    constructor(public User: UserService, public auth: AuthService, private router: Router, private http: HttpClient) {

    }

    ngOnInit(): void {
        // this.auth.user$.subscribe(user => {
        //   // if (user && "activated" in user && user.activated) {
        //   //   this.router.navigate(['/dashboard']);
        //   // }
        // });
    }


    // Sign in with email/password
    login() {
        const {email, password} = this.auth.loginForm.value;
        // this.auth.signIn(email, password);
        // this.auth.login(email, password);

        // this.http.post(`${environment.baseURL}login`, this.formControls.value)

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
