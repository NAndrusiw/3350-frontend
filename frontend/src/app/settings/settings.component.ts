import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingsForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('((\\+91-?)|0)?[0-9]{10}$')],
    )
  });
  formControls = this.settingsForm.controls;

  constructor() {  }

  ngOnInit(): void {
  }

  saveChanges() {

  }
}
