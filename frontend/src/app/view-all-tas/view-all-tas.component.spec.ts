import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTasComponent } from './view-all-tas.component';

describe('ViewAllTasComponent', () => {
  let component: ViewAllTasComponent;
  let fixture: ComponentFixture<ViewAllTasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
