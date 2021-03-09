import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInstructorFormComponent } from './new-instructor-form.component';

describe('NewInstructorFormComponent', () => {
  let component: NewInstructorFormComponent;
  let fixture: ComponentFixture<NewInstructorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInstructorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInstructorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
