import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTaResponsesComponent } from './upload-ta-responses.component';

describe('UploadTaResponsesComponent', () => {
  let component: UploadTaResponsesComponent;
  let fixture: ComponentFixture<UploadTaResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTaResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTaResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
