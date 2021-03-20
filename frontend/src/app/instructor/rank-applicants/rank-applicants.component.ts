import {Component, Input, OnInit, Output} from '@angular/core';
import {ResponseService} from '../../services/response.service';
import {HttpErrorResponse} from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-rank-applicants',
    templateUrl: './rank-applicants.component.html',
    styleUrls: ['./rank-applicants.component.scss']
})
export class RankApplicantsComponent implements OnInit {

    // @Output('cdkDropDropped')
    @Input() courseCode: string;
    public allResponses;

    movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi'
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.allResponses, event.previousIndex, event.currentIndex);
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
        // this.allApplicants = this.allResponses.filter((v,i,a)=>a.findIndex(t=>(t.taName === v.taName))===i)
    });

    saveRankings() {

        let taNames = this.allResponses.map(item => {
            return item.taName;
        })


        this.responseService.saveRankings({
            courseCode: this.courseCode,
            taName: taNames,
        }).subscribe(
            (data: any) => {
                console.log(data);
                alert('Done!');
            },
            (err: HttpErrorResponse) => {

                window.alert(err.error)
            }
        );

    }


}
