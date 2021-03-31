import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaResponseCardComponent } from './ta-response-card.component';

describe('TaResponseCardComponent', () => {
  let component: TaResponseCardComponent;
  let fixture: ComponentFixture<TaResponseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaResponseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaResponseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
