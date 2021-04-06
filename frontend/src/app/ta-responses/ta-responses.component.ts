import {Component, OnInit} from '@angular/core';
import {ResponseService} from '../services/response.service';

@Component({
    selector: 'app-ta-responses',
    templateUrl: './ta-responses.component.html',
    styleUrls: ['./ta-responses.component.scss']
})
export class TaResponsesComponent implements OnInit {

     allResponses: any;
     allApplicants: any;
     instructorRankings: any;
     algorithmRankings: any;

     isLoading: boolean;

    constructor(private responseService: ResponseService) {

    }

    ngOnInit(): void {
        this.loadResponses();
        this.loadInstructorRankings();
    }


    loadResponses = () => this.responseService.getResponses().subscribe(res => {
        this.allResponses = res;
        this.allApplicants = this.allResponses.filter((v,i,a)=>a.findIndex(t=>(t.taName === v.taName))===i)
    });

    loadInstructorRankings = () => this.responseService.getInstructorRankings().subscribe(res => {
        this.instructorRankings = res;
    });

    filterByRanking(): void {

    }

    startRanking() {
        this.isLoading = true;

        this.responseService.getFinalRank().subscribe(res => {
            this.algorithmRankings = res;
            this.isLoading = false;
        })
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
