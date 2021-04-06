import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';

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
    @Input() isApplicantEditingMode = false;
    @Output() unlinkedCourseEvent  = new EventEmitter<string>();
    @Output() approveApplicantEvent = new EventEmitter<string>();
    @Output() rejectApplicantEvent = new EventEmitter<string>();

    constructor(public auth: AuthService) {
    }

    ngOnInit(): void {
    }

    getApplicantStatus(applicantStatus: number) {
        switch (applicantStatus) {
            case 1:
                return 'Fundable';
            case 2:
                return 'Not Fundable';
            case 3:
                return 'External';
        }
        return 'N/A';
    }

    get canApproveOrDecline() {
        return this.auth.isInstructor() && this.compactMode && (!this.response.accepted && !this.response.declined);
    }

    unlinkApplicantFromCourse(_ta_id) {
        this.unlinkedCourseEvent.emit(_ta_id);
    }

    approveApplicant(_ta_id) {
        this.approveApplicantEvent.emit(_ta_id);
    }
    rejectApplicant(_ta_id) {
        this.rejectApplicantEvent.emit(_ta_id);
    }
}
