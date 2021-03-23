import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginQuestionProcessComponent } from './begin-question-process.component';

describe('BeginQuestionProcessComponent', () => {
  let component: BeginQuestionProcessComponent;
  let fixture: ComponentFixture<BeginQuestionProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginQuestionProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginQuestionProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
