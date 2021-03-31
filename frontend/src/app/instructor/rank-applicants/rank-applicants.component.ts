import {Component, Input, OnInit, Output} from '@angular/core';
import {ResponseService} from '../../services/response.service';
import {HttpErrorResponse} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-rank-applicants',
    templateUrl: './rank-applicants.component.html',
    styleUrls: ['./rank-applicants.component.scss']
})
export class RankApplicantsComponent implements OnInit {

    // @Output('cdkDropDropped')
    editing: boolean = false;
    @Input() courseCode: string;
    @Input() originalQuestions: any;
    public allResponses;
    public rankedResponses;


    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.rankedResponses, event.previousIndex, event.currentIndex);
    }


    resetRank() {
        this.editing = false;
        this.loadResponses();
    }

    constructor(public responseService: ResponseService) {
    }

    ngOnInit(): void {
        this.loadResponses();
    }

    loadResponses = () => this.responseService.getResponses().subscribe(res => {
        this.allResponses = res;
        this.allResponses = this.allResponses.filter(item => {
            return item.courseCode === this.courseCode;
        });
        this.rankedResponses = this.allResponses;
        // this.allApplicants = this.allResponses.filter((v,i,a)=>a.findIndex(t=>(t.taName === v.taName))===i)
    });


    saveRankings() {

        let taEmails = this.allResponses.map(item => {
            return item.applicantEmail;
        });


        this.responseService.saveRankings({
            courseCode: this.courseCode,
            taEmails: taEmails,
        }).subscribe(
            (data: any) => {
                this.editing = false;
            },
            (err: HttpErrorResponse) => {

                window.alert(err.error);
            }
        );

    }


}
