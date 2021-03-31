import {Component, OnInit} from '@angular/core';
import {ResponseService} from '../../services/response.service';

@Component({
    selector: 'app-upload-ta-responses',
    templateUrl: './upload-ta-responses.component.html',
    styleUrls: ['./upload-ta-responses.component.scss']
})
export class UploadTaResponsesComponent implements OnInit {

    public successUpload : boolean;


    public fileName;


    public allResponses: any;

    constructor(public responseService: ResponseService) {
    }

    ngOnInit(): void {
        this.loadResponses()
    }

    onFileSelected(event) {

        const file: File = event.target.files[0];
        if (file) {

            this.fileName = file.name;
            //
            const formData = new FormData();
            //
            formData.append('file', file);
            //

            this.responseService.uploadResponse(formData).subscribe(res => {
                this.successUpload = true;
                this.allResponses = res;
            });
        }
    }



    loadResponses = () => this.responseService.getResponses().subscribe(res => {
        this.allResponses = res;
    });


}
