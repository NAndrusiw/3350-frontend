import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEnrollmentDataComponent } from './import-enrollment-data.component';

describe('ImportEnrollmentDataComponent', () => {
  let component: ImportEnrollmentDataComponent;
  let fixture: ComponentFixture<ImportEnrollmentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportEnrollmentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportEnrollmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
