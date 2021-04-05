import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/forms/data.service';

@Component({
    selector: 'app-export-questions',
    templateUrl: './export-questions.component.html',
    styleUrls: ['./export-questions.component.scss']
})
export class ExportQuestionsComponent implements OnInit {

    public allQuestions: any;

    constructor(public dataService: DataService) {
    }

    ngOnInit(): void {
        this.loadQuestions();
    }

    loadQuestions = () => this.dataService.getQuestions('').subscribe(res => {
        this.allQuestions = res;
    });

    downloadAllExcel(): void {
        window.location.href = this.dataService.exportQuestionsUrl();
    }

    downloadExcelForCourse($question): void {
        window.location.href = this.dataService.exportQuestionsForCourseUrl($question._id);
    }

}
