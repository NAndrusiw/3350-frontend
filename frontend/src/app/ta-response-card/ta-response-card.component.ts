import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ta-response-card',
  templateUrl: './ta-response-card.component.html',
  styleUrls: ['./ta-response-card.component.scss']
})
export class TaResponseCardComponent implements OnInit {

  @Input() response;
  @Input() compactMode = false;
  @Input() noBottomPadding = false;
  @Input() originalQuestions;

  constructor() { }

  ngOnInit(): void {
  }

  getApplicantStatus(applicantStatus: number) {
    switch(applicantStatus) {
      case 1:
        return 'Fundable';
      case 2:
        return 'Not Fundable';
      case 3:
        return 'External';
    }
    return 'N/A';
  }
}
