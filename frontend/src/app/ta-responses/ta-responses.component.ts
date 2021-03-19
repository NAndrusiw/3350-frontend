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

    constructor(private responseService: ResponseService) {

    }

    ngOnInit(): void {
        this.loadResponses();
    }


    loadResponses = () => this.responseService.getResponses().subscribe(res => {
        this.allResponses = res;
        this.allApplicants = this.allResponses.filter((v,i,a)=>a.findIndex(t=>(t.taName === v.taName))===i)
    });

    filterByRanking(): void {

    }

}
