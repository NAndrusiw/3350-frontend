import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-view-all-instructors',
    templateUrl: './view-all-instructors.component.html',
    styleUrls: ['./view-all-instructors.component.scss']
})
export class ViewAllInstructorsComponent implements OnInit {

    constructor(public auth: AuthService, public userService: UserService) {
    }

    public fileName;
    public successUpload = false;
    public allInstructors: any;

    ngOnInit(): void {
        this.getAllInstructors();
    }

    getAllInstructors = () => this.userService.getInstructors().subscribe(res => {
        this.allInstructors = res;
    });

    onFileSelected(event) {

        const file: File = event.target.files[0];
        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append('file', file);
            this.userService.uploadInstructors(formData).subscribe(res => {
                this.successUpload = true;
                this.getAllInstructors();
                this.fileName = null;
            }, err => {
                alert(err.error.msg);
            });
        }
    }
}
