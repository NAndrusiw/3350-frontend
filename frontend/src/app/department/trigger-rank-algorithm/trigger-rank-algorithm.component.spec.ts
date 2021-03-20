import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerRankAlgorithmComponent } from './trigger-rank-algorithm.component';

describe('TriggerRankAlgorithmComponent', () => {
  let component: TriggerRankAlgorithmComponent;
  let fixture: ComponentFixture<TriggerRankAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerRankAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerRankAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
