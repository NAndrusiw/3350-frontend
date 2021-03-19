import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaResponsesComponent } from './ta-responses.component';

describe('TaResponsesComponent', () => {
  let component: TaResponsesComponent;
  let fixture: ComponentFixture<TaResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
