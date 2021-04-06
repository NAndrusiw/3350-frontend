import {Injectable, NgZone} from '@angular/core';
// import firebase from 'firebase/app';
// import {AngularFireAuth} from "@angular/fire/auth";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import * as moment from "moment";
import {Observable} from 'rxjs';
import {map, shareReplay, take, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

const API_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // user$: Observable<User>;

    // public isSignedIn;

    constructor(private http: HttpClient, private router: Router) {

    }

    get isSignedIn() {
        return  localStorage.getItem('Token') != null && localStorage.getItem('Token') !== 'undefined';
    }

    registerForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    });

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    });

    instructorForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', Validators.required),
    })

    passwordForm = new FormGroup({
        password: new FormControl('', Validators.required)
    })

    logout() {
        localStorage.removeItem('Token');
        localStorage.removeItem('User');
        this.router.navigate([ '/login' ]);
    }

    getUser() {
        return JSON.parse(localStorage.getItem('User'));
    }

    getId() {
        return this.getUser().data._id;
    }

    getUserName() {
        return this.getUser().data.name;
    }

    getEmail() {
        return this.getUser().data.email;
    }

    isInstructor() {
        return this.getUser().data.role === 'instructor';
    }

    isDepartment() {
        return this.getUser().data.role === 'department';
    }


//     private checkAuthorization(user: User, allowedRoles: string[]) {
//         if (!user) {
//             return false;
//         }
//
//         for (const role of allowedRoles) {
//             if (user.roles[role]) {
//                 return true
//             }
//         }
//         return false;
//     }
//

//
//     isAdmin(user: User) {
//         const allowed = ['admin'];
//         return this.checkAuthorization(user, allowed);
//     }
//
//     isStudent(user: User) {
//         const allowed = ['student']
//         return this.checkAuthorization(user, allowed);
//     }
//
//     canRead(user: User): boolean {
//         const allowed = ['admin', 'guest', 'student'];
//         return this.checkAuthorization(user, allowed);
//     }
//
//     canEdit(user: User): boolean {
//         const allowed = ['admin', 'student'];
//         return this.checkAuthorization(user, allowed);
//     }
//
//     canDelete(user: User): boolean {
//         const allowed = ['admin', 'student'];
//         return this.checkAuthorization(user, allowed);
//     }
//
//     getUser() {
//
//         return JSON.parse(localStorage.getItem('user'));
//     }


}
