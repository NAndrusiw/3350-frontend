import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


    formControls = this.auth.passwordForm.controls;

    invalidToken: boolean;
    token: string;

    // updated after querying the database
    public user = {
        name: 'John Doe',
        username: 'username',
        email: 'uwo@uwo.ca',
    };

    constructor(public auth: AuthService, public User: UserService, private route: ActivatedRoute, private router: Router) {
        this.token = this.route.snapshot.queryParamMap.get('token');
    }

    ngOnInit(): void {

        this.validateToken();

        // if (this.auth.getUser() && this.auth.getUser().emailVerified) {
        //   window.alert('Ok now verify your email');
        // }
    }

    register() {

        this.User.createNewUser({
            username: this.user.username,
            email: this.user.username + '@uwo.ca',
            role: 'instructor',
            password: this.auth.passwordForm.get('password').value,
            name: this.user.name,
        })
            .subscribe(
                (data: any) => {

                    let token = data.accessToken;
                    localStorage.setItem('Token', token);
                    localStorage.setItem('User', JSON.stringify(data));

                    this.router.navigate(['/']);
                },
                (err: HttpErrorResponse) => {
                    console.log(err);
                    window.alert(err.error);
                }
            );

        // this.auth.signUp()
        //  this.auth.registerForm.value;
        // this.auth.signUp(this.auth.registerForm.value);
        this.auth.passwordForm.reset();

    }

    validateToken() {

        if (!this.token) {
            this.invalidToken = true;
            this.token = null;
            return;
        }

        this.User.validateToken(this.token).subscribe(
            (data: any) => {
                console.log(data);
                this.user = data;
            }, (err: HttpErrorResponse) => {
                this.invalidToken = true;
                this.token = null;
            }
        );
    }
}
