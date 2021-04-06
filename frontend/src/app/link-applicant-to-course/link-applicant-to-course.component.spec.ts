import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkApplicantToCourseComponent } from './link-applicant-to-course.component';

describe('LinkApplicantToCourseComponent', () => {
  let component: LinkApplicantToCourseComponent;
  let fixture: ComponentFixture<LinkApplicantToCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkApplicantToCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkApplicantToCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
