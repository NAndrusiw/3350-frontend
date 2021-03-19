import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseOpenTaPositionComponent } from './browse-open-ta-position.component';

describe('BrowseOpenTaPositionComponent', () => {
  let component: BrowseOpenTaPositionComponent;
  let fixture: ComponentFixture<BrowseOpenTaPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseOpenTaPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseOpenTaPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
