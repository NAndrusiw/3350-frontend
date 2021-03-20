import { Component, OnInit } from '@angular/core';
import {ResponseService} from '../../services/response.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-upload-ta-responses',
  templateUrl: './upload-ta-responses.component.html',
  styleUrls: ['./upload-ta-responses.component.scss']
})
export class UploadTaResponsesComponent implements OnInit {

  //
  // public uploader: FileUploader = new FileUploader({
  //   url: this.responseService.getUploadUrl(),
  //   itemAlias: 'file'
  // });
  //


  uploadForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  public formControls = this.uploadForm.controls;
  public allResponses: any;

  constructor(public responseService: ResponseService) {
  }

  ngOnInit(): void {

  }

  //
  // onFileChange(event) {
  //
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.uploadForm.patchValue({
  //       fileSource: file
  //     });
  //   }
  // }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('fileSource').value);
    // this.responseService.uploadResponse(formData).subscribe(item => {
    //   console.log('body', item);
    // });

    this.loadResponses();

  }



  loadResponses = () => this.responseService.getResponses().subscribe(res => {
    this.allResponses = res;
  });



}
