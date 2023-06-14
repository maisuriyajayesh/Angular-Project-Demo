import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListfromComponent } from './employee-listfrom.component';

describe('EmployeeListfromComponent', () => {
  let component: EmployeeListfromComponent;
  let fixture: ComponentFixture<EmployeeListfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
