import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProflieDataListComponent } from './all-proflie-data-list.component';

describe('AllProflieDataListComponent', () => {
  let component: AllProflieDataListComponent;
  let fixture: ComponentFixture<AllProflieDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProflieDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProflieDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
