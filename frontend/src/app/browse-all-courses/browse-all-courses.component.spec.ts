import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAllCoursesComponent } from './browse-all-courses.component';

describe('BrowseAllCoursesComponent', () => {
  let component: BrowseAllCoursesComponent;
  let fixture: ComponentFixture<BrowseAllCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseAllCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseAllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
