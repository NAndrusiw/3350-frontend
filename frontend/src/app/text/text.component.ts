import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'text-input',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  // viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class TextComponent implements OnInit {

  @Input() label: string;
  @Input() validate: boolean;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() formGroup: FormGroup;
  @Input() helper: string;

  constructor() { }

  ngOnInit(): void {
  }

}
