import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'text',
  template: `
    <div class="form-group">
      <label  class="form-label"><b>{{ label }}:</b></label>
      <input  [formControlName]="validate ? 'name' : null" type="text" class="form-control" id="courseCode" placeholder="{{ placeholder }}">
    </div>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Native
})
export class TextComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() validate: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
